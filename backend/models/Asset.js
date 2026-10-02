const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', default: null },
  variant_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Variant', default: null },
  storage_key: { type: String, default: null },
  url: { type: String, default: null },
  role: { type: String, enum: ['cover', 'gallery'], default: 'gallery' },
  alt_text: { type: String, default: '' },
  sort_order: { type: Number, default: 0 }
}, { timestamps: { createdAt: 'created_at', updatedAt: false } });
module.exports = mongoose.model('Asset', schema);
