const mongoose = require('mongoose');
const Product = require('../models/Product');

function isValidId(id){
    return mongoose.Types.ObjectId.isValid(id);
}

exports.create = async (req, res, next) => {
  try {
    const{name, slug, sku, category, price, images} = req.body
    if(!name || !slug || !sku || !category || !price || !images){
      return res.status(400).json({message: "required fields are must"})
    }
    const p = await Product.create(req.body);
    res.status(201).json({ data: p });
  } catch (err) { next(err); }
};

exports.getOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!isValidId(id)) return res.status(400).json({ message: 'Invalid id' });
    const p = await Product.findOne({ _id: id, 'flags.isActive': true }).lean();
    if (!p) return res.status(404).json({ message: 'Not found' });
    res.json({ data: p });
  } catch (err) { next(err); }
};

exports.update = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!isValidId(id)) return res.status(400).json({ message: 'Invalid id' });
    const updated = await Product.findOneAndUpdate(
      { _id: id, 'flags.isActive': true },
      req.body,
      { new: true, runValidators: true }
    );
    if (!updated) return res.status(404).json({ message: 'Not found or inactive' });
    res.json({ data: updated });
  } catch (err) { next(err); }
};

exports.remove = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!isValidId(id)) return res.status(400).json({ message: 'Invalid id' });
    const p = await Product.findByIdAndUpdate(id, { 'flags.isActive': false }, { new: true });
    if (!p) return res.status(404).json({ message: 'Not found' });
    res.json({ message: 'Soft deleted' });
  } catch (err) { next(err); }
};

exports.list = async (req, res, next) => {
  try {
    const page = Math.max(1, parseInt(req.query.page || '1', 10));
    const limit = Math.min(100, Math.max(1, parseInt(req.query.limit || '10', 10)));
    const skip = (page - 1) * limit;

    const filter = { 'flags.isActive': true };
    
    if (req.query.category) filter.category = req.query.category;
    if (req.query.minPrice) filter['pricing.price'] = { ...(filter['pricing.price'] || {}), $gte: parseFloat(req.query.minPrice) };
    if (req.query.maxPrice) filter['pricing.price'] = { ...(filter['pricing.price'] || {}), $lte: parseFloat(req.query.maxPrice) };

    let query;
    if (req.query.search) {
      query = Product.find({ $text: { $search: req.query.search }, ...filter }, { score: { $meta: "textScore" } });
    } else {
      query = Product.find(filter);
    }

    let sort = {};
    if (req.query.sort) {
      const parts = req.query.sort.split(',');
      for (const p of parts) {
        if (!p) continue;
        if (p.startsWith('-')) { sort[p.slice(1)] = -1; continue; }
        const [f, d] = p.split(':').map(s => s.trim());
        sort[f] = (d === 'desc') ? -1 : 1;
      }
    } else if (req.query.search) {
      sort = { score: { $meta: "textScore" } };
    } else {
      sort = { createdAt: -1 };
    }

    const total = await Product.countDocuments(filter);
    const data = await query.sort(sort).skip(skip).limit(limit).lean();

    res.json({
      meta: { total, page, limit, pages: Math.ceil(total / limit) },
      data
    });
  } catch (err) { next(err); }
};
