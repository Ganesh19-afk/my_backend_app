"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_route_1 = __importDefault(require("./routes/user.route"));
const product_route_1 = __importDefault(require("./routes/product.route"));
const auth_route_1 = __importDefault(require("./routes/auth.route"));
const order_route_1 = __importDefault(require("./routes/order.route"));
// import '../middlewares/abandonedCart'
const cors_1 = __importDefault(require("cors"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const compression_1 = __importDefault(require("compression"));
const orderInvoice_route_1 = __importDefault(require("./routes/orderInvoice.route"));
const test_route_1 = __importDefault(require("./routes/test.route"));
const app = (0, express_1.default)();
const port = 5000;
app.use('/uploads', express_1.default.static('uploads'));
app.use(express_1.default.json());
app.use((0, compression_1.default)());
app.use((0, cors_1.default)({ origin: 'http://localhost:3000' }));
// app.use(helmet());
const authLimiter = (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000,
    max: 10,
    handler: (req, res) => {
        console.log(`Blocked IP: ${req.ip}`); // Logs the client's IP
        res.status(429).json({ message: "Too many attempts, please try again later." });
    }
});
app.use("/test", test_route_1.default);
app.use('/user', user_route_1.default);
app.use("/api/auth/", auth_route_1.default);
app.use("/product", product_route_1.default);
app.use("/order", order_route_1.default);
app.use("/api/order", orderInvoice_route_1.default);
app.listen(port, () => {
    console.log(`Connected successfully on port http://localhost:${port}`);
});
