const slugRe = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
function validateCategory(body) {
  if (!body.name || typeof body.name !== 'string') return 'name is required';
  if (!body.slug || !slugRe.test(body.slug)) return 'slug must use lowercase letters, numbers and hyphens';
  return null;
}
function validateProduct(body, partial=false) {
  if (!partial && (!body.name || !body.category_id)) return 'name and category_id are required';
  if (body.slug !== undefined && !slugRe.test(body.slug)) return 'invalid slug';
  if (body.status !== undefined && !['draft','active','archived'].includes(body.status)) return 'invalid status';
  return null;
}
function validateSKU(body, partial=false) {
  if (!partial && (!body.variant_id || !body.sku_code || body.price === undefined || body.stock_quantity === undefined)) return 'variant_id, sku_code, price and stock_quantity are required';
  if (body.price !== undefined && (Number.isNaN(Number(body.price)) || Number(body.price) < 0)) return 'price must be >= 0';
  if (body.stock_quantity !== undefined && (!Number.isInteger(Number(body.stock_quantity)) || Number(body.stock_quantity) < 0)) return 'stock_quantity must be a non-negative integer';
  return null;
}
module.exports = { validateCategory, validateProduct, validateSKU };
