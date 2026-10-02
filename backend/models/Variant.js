const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  option_name: { type: String, required: true, trim: true, maxlength: 100 },
  option_value: { type: String, required: true, trim: true, maxlength: 255 }
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });
schema.index({ product_id: 1, option_name: 1, option_value: 1 }, { unique: true });
module.exports = mongoose.model('Variant', schema);
