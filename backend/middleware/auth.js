const jwt = require('jsonwebtoken');
const User = require('../models/User');

async function authenticate(req, res, next) {
  try {
    const header = req.headers.authorization || '';
    const token = header.startsWith('Bearer ') ? header.slice(7) : null;
    if (!token) return res.status(401).json({ success:false, message:'Authentication required' });
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(payload.id).select('-password_hash');
    if (!req.user) return res.status(401).json({ success:false, message:'User not found' });
    next();
  } catch { return res.status(401).json({ success:false, message:'Invalid or expired token' }); }
}

function requireAdmin(req, res, next) {
  if (!req.user || req.user.role !== 'admin') return res.status(403).json({ success:false, message:'Administrator access required' });
  next();
}
module.exports = { authenticate, requireAdmin };
