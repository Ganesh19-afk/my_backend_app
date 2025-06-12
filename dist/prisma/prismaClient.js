"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import {prismaClient} from '@prisma/client'
const prisma_1 = require("../generated/prisma");
const prisma = new prisma_1.PrismaClient();
exports.default = prisma;
