"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user.controller");
const jwt_1 = require("../scripts/jwt");
const cart_controller_1 = require("../controllers/cart.controller");
const address_route_1 = __importDefault(require("../routes/address.route"));
const router = express_1.default.Router();
router.post('/', user_controller_1.createUser);
router.get('/', user_controller_1.getUser);
router.use('/address', address_route_1.default);
router.use(jwt_1.authenticate);
router.post('/cart/add-update', cart_controller_1.addToCart);
router.get('/cart', cart_controller_1.getCart);
router.delete('/cart/delete-item/:id', cart_controller_1.deleteCartItem);
exports.default = router;
