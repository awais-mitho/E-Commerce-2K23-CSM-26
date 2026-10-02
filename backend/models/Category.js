const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  parent_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', default: null },
  name: { type: String, required: true, trim: true, maxlength: 255 },
  slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
  is_active: { type: Boolean, default: true }
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });
schema.index({ slug: 1 }, { unique: true });
module.exports = mongoose.model('Category', schema);
