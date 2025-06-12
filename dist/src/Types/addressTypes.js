"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAddressSchema = exports.createAddressSchema = void 0;
const zod_1 = require("zod");
exports.createAddressSchema = zod_1.z.object({
    userId: zod_1.z.number(),
    street: zod_1.z.string().min(1),
    city: zod_1.z.string().min(1),
    state: zod_1.z.string().min(1),
    postalCode: zod_1.z.string().min(1),
    country: zod_1.z.string().min(1),
    addressType: zod_1.z.enum(['BILLING', 'DELIVERY']),
});
exports.updateAddressSchema = zod_1.z.object({
    street: zod_1.z.string().min(1).optional(),
    city: zod_1.z.string().min(1).optional(),
    state: zod_1.z.string().min(1).optional(),
    postalCode: zod_1.z.string().min(1).optional(),
    country: zod_1.z.string().min(1).optional(),
    addressType: zod_1.z.enum(['BILLING', 'DELIVERY']).optional(),
});
