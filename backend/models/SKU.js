const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  variant_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Variant', required: true },
  sku_code: { type: String, required: true, unique: true, uppercase: true, trim: true, maxlength: 100 },
  price: { type: mongoose.Schema.Types.Decimal128, required: true, min: 0 },
  stock_quantity: { type: Number, required: true, min: 0, validate: { validator: Number.isInteger, message: 'stock_quantity must be an integer' } },
  is_active: { type: Boolean, default: true }
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });
schema.index({ sku_code: 1 }, { unique: true });
module.exports = mongoose.model('SKU', schema);
