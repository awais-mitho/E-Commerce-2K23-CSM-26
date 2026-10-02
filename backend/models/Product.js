const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  category_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  name: { type: String, required: true, trim: true, maxlength: 255 },
  slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
  description: { type: String, default: '' },
  status: { type: String, enum: ['draft', 'active', 'archived'], default: 'draft' }
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });
schema.index({ slug: 1 }, { unique: true });
module.exports = mongoose.model('Product', schema);
