const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, minlength: 2 },
  description: { type: String, default: '', trim: true },
  category: { type: String, required: true, index: true },
  price: { type: Number, required: true, min: 0 },
  quantity: { type: Number, default: 0, min: 0 },
  isActive: { type: Boolean, default: true, index: true }
}, { timestamps: true, strict: true });

productSchema.index({ name: 'text', description: 'text' }); // text search

module.exports = mongoose.model('Product', productSchema);
