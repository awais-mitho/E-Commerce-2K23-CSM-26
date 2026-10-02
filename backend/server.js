require('dotenv').config();
const express=require('express');const cors=require('cors');const morgan=require('morgan');
const connectDB=require('./config/database');const authRoutes=require('./routes/authRoutes');const adminRoutes=require('./routes/adminRoutes');
const app=express();app.use(cors());app.use(express.json());app.use(morgan('dev'));
app.get('/health',(req,res)=>res.json({success:true,status:'ok'}));
app.use('/api/v1/auth',authRoutes);app.use('/api/v1/admin',adminRoutes);
app.use((err,req,res,next)=>{console.error(err);if(err.code===11000)return res.status(409).json({success:false,message:'Duplicate value violates a unique constraint'});if(err.name==='ValidationError')return res.status(400).json({success:false,message:err.message});res.status(500).json({success:false,message:'Internal server error'});});
if(require.main===module){connectDB().then(()=>app.listen(process.env.PORT||5000,()=>console.log(`API running on port ${process.env.PORT||5000}`))).catch(e=>{console.error(e);process.exit(1);});}
module.exports=app;
