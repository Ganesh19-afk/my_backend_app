"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const order_controller_1 = require("../controllers/order.controller");
const jwt_1 = require("../scripts/jwt");
const guestOrder_controller_1 = require("../controllers/guestOrder.controller");
const router = express_1.default.Router();
router.post('/guest-order', guestOrder_controller_1.guestOrder);
router.use(jwt_1.authenticate);
router.get('/get-orders', order_controller_1.getOrders);
router.post('/place-order', order_controller_1.placeOrder);
router.get('/orderid/:orderId', order_controller_1.getSingleOrder);
exports.default = router;
