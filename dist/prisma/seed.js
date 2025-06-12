"use strict";
// prisma/seed.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../src/Db/prisma"));
const hash_1 = require("../src/scripts/hash");
async function main() {
    const admins = [
        {
            name: 'Admin',
            email: 'admin1@gmail.com',
            password: 'admin@123',
            profile: '/uploads/admin1-profile.jpg',
            age: 21,
        },
    ];
    for (const admin of admins) {
        const adminExists = await prisma_1.default.user.findUnique({ where: { email: admin.email } });
        if (!adminExists) {
            await prisma_1.default.user.create({
                data: {
                    name: admin.name,
                    email: admin.email,
                    password: await (0, hash_1.hashPassword)(admin.password),
                    profile: admin.profile,
                    role: 'ADMIN',
                    age: admin.age,
                },
            });
        }
    }
    // Optionally seed regular users here as well
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma_1.default.$disconnect();
});
