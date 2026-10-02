const request=require('supertest');const app=require('../server');
test('health endpoint works',async()=>{const r=await request(app).get('/health');expect(r.statusCode).toBe(200);expect(r.body.success).toBe(true);});
test('admin routes reject unauthenticated requests',async()=>{const r=await request(app).get('/api/v1/admin/products');expect(r.statusCode).toBe(401);});
