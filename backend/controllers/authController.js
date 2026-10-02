const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
async function login(req,res){
  const {email,password}=req.body;
  const user=await User.findOne({email: String(email||'').toLowerCase()});
  if(!user || !(await bcrypt.compare(password||'', user.password_hash))) return res.status(401).json({success:false,message:'Invalid credentials'});
  const token=jwt.sign({id:user._id,role:user.role},process.env.JWT_SECRET,{expiresIn:process.env.JWT_EXPIRES_IN||'1d'});
  res.json({success:true,data:{token,user:{id:user._id,full_name:user.full_name,email:user.email,role:user.role}}});
}
module.exports={login};
