"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("../controllers/product.controller");
const upload_middleware_1 = require("../../middlewares/upload.middleware");
const jwt_1 = require("../scripts/jwt");
const variant_route_1 = __importDefault(require("../routes/variant.route"));
const router = express_1.default.Router();
router.get('/', product_controller_1.getProduct);
router.get('/category', product_controller_1.getProductsByCategory);
router.get('/categories', product_controller_1.getAllCategories);
router.get('/product_info/:slug', product_controller_1.getSingleProduct);
router.use('/variant', variant_route_1.default);
router.use(jwt_1.authenticate);
router.use(jwt_1.authorizeAdmin);
router.post('/addproduct', upload_middleware_1.upload.single("image"), product_controller_1.createProduct);
router.delete('/delete/:id', product_controller_1.deleteProduct);
router.patch('/update/:id', upload_middleware_1.upload.single("image"), product_controller_1.updateProduct);
exports.default = router;
