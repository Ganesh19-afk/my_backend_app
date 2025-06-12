"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jwt_1 = require("../scripts/jwt");
const address_controller_1 = require("../controllers/address.controller");
const router = express_1.default.Router();
router.use(jwt_1.authenticate);
router.get('/get', address_controller_1.getAddress);
router.post('/create', address_controller_1.createAddress);
router.post('/update', address_controller_1.updateAddress);
router.post('/delete', address_controller_1.deleteAddress);
exports.default = router;
