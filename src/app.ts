
import express from 'express';
import userRoutes from './routes/user.route'
import productRoutes from './routes/product.route'
import authRoutes from './routes/auth.route'
import orderRoutes from './routes/order.route'
import { authenticate } from './scripts/jwt';
// import '../middlewares/abandonedCart'
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import compression from 'compression';
import invoiceRoutes from './routes/orderInvoice.route'
import testRoutes from './routes/test.route'
const app = express();
const port = 5000;

app.use('/uploads', express.static('uploads'));


app.use(express.json());
app.use(compression());

app.use(cors({ origin: 'http://localhost:3000' }));



// app.use(helmet());

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 10, 
  handler: (req, res) => {
    console.log(`Blocked IP: ${req.ip}`); // Logs the client's IP
    res.status(429).json({ message: "Too many attempts, please try again later." });
  }
});

app.use("/test",testRoutes)
app.use('/user',userRoutes)

app.use("/api/auth/",authRoutes);

app.use("/product", productRoutes)

app.use("/order",orderRoutes);

app.use("/api/order", invoiceRoutes);   


 app.listen(port, ()=>{
     console.log(
`Connected successfully on port http://localhost:${port}`)
});