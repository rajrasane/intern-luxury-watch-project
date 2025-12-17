const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true, trim: true },
    slug: { type: String, required: true, unique: true, trim: true },
    sku: { type: String, required: true, unique: true, trim: true },

    brand: { type: String, trim: true },
    category: { type: String, required: true, index: true },
    subCategory: { type: String, trim: true },
    productType: { type: String, trim: true },

    tags: [{ type: String, trim: true }],

    pricing: {
      currency: { type: String, default: "INR" },
      price: { type: Number, required: true, min: 0 },
      mrp: { type: Number, min: 0 },
      discountPercent: { type: Number, default: 0 },
      taxPercent: { type: Number, default: 0 },
      finalPrice: { type: Number }
    },

    stock: {
      quantity: { type: Number, default: 0 },
      isInStock: { type: Boolean, default: true },
      allowBackorder: { type: Boolean, default: false }
    },

    images: [
      {
        url: { type: String, required: true },
        alt: { type: String },
        isPrimary: { type: Boolean, default: false }
      }
    ],

    description: {
      short: { type: String, trim: true },
      long: { type: String, trim: true }
    },

    attributes: {
      type: Map,
      of: mongoose.Schema.Types.Mixed
    },

    shipping: {
      weightGrams: { type: Number },
      dimensionsCm: {
        length: Number,
        width: Number,
        height: Number
      },
      shipsFrom: String,
      availableRegions: [String]
    },

    rating: {
      average: { type: Number, min: 0, max: 5 },
      count: { type: Number, default: 0 }
    },

    flags: {
      isActive: { type: Boolean, default: true, index: true },
      isFeatured: { type: Boolean, default: false },
      isNewArrival: { type: Boolean, default: false },
      isBestSeller: { type: Boolean, default: false }
    },

    seo: {
      metaTitle: String,
      metaDescription: String,
      keywords: [String]
    },

    audit: {
      createdBy: String,
      updatedBy: String
    }
  },
  { timestamps: true, strict: true }
);

productSchema.index({
  name: "text",
  "description.short": "text",
  "description.long": "text",
  tags: "text"
});

module.exports = mongoose.model("Product", productSchema);
