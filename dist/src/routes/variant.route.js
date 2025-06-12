"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const variant_controller_1 = require("../controllers/variant.controller");
const upload_middleware_1 = require("../../middlewares/upload.middleware");
const jwt_1 = require("../scripts/jwt");
const router = express_1.default.Router();
router.get('/', variant_controller_1.getVariant);
router.use(jwt_1.authenticate, jwt_1.authorizeAdmin);
router.post('/addvariant', upload_middleware_1.upload.array('image'), variant_controller_1.createVariant);
router.patch('/update/:id', upload_middleware_1.upload.array('image'), variant_controller_1.updateVariant);
router.post('/delete/:id', variant_controller_1.deleteVariant);
exports.default = router;
