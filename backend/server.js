import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRout.js';
import userRouter from './routes/userRoute.js';
import 'dotenv/config'
import cartRoute from './routes/cartRoute.js';
import orderRoute from './routes/orderRoute.js';

//app config
const app = express();
const port = 4000

// const allowedOrigins = [
//   'https://spicey-admin.vercel.app',
//   'https://spicey.vercel.app'
// ];

// app.use(cors({
//   origin: function (origin, callback) {
//     // Allow requests with no origin (like mobile apps or curl requests)
//     if (!origin) {
//       return callback(null, true);
//     }
//     if (allowedOrigins.includes(origin)) {
//       return callback(null, true);
//     } else {
//       return callback(new Error('Not allowed by CORS'));
//     }
//   },
//   credentials: true // if you want to send cookies
// }));
app.use(cors())
//middleware
app.use(express.json())

//DB connection 
connectDB();



// api endpoint
app.use('/api/food',foodRouter);
app.use('/api/user',userRouter);
app.use('/api/cart',cartRoute);
app.use('/api/order',orderRoute);
app.use('/images',express.static('uploads'))

app.get('/',(req,res)=>{
    res.json({
        success:true,
        message:"Server is running",
    })
})


app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
})
