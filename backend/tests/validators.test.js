const {validateCategory,validateProduct,validateSKU}=require('../validators/catalog');
test('category requires name and valid slug',()=>{expect(validateCategory({name:'Fiction',slug:'fiction'})).toBeNull();expect(validateCategory({name:'Fiction',slug:'Bad Slug'})).not.toBeNull();});
test('product requires name and category',()=>{expect(validateProduct({name:'Book',category_id:'x'})).toBeNull();expect(validateProduct({name:'Book'})).not.toBeNull();});
test('SKU rejects negative stock and price',()=>{expect(validateSKU({variant_id:'x',sku_code:'A',price:1,stock_quantity:-1})).toMatch(/stock/);expect(validateSKU({variant_id:'x',sku_code:'A',price:-1,stock_quantity:1})).toMatch(/price/);});
