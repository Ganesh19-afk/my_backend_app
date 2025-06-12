"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prismaClient_1 = __importDefault(require("../../prisma/prismaClient"));
async function main() {
    const user = await prismaClient_1.default.user.create({
        data: {
            name: "Ganesh",
            age: 25,
            email: "ganesh@gmail.com",
            password: '',
            profile: '',
        },
    });
    console.log(user, "user created");
}
main()
    .catch((e) => {
    console.log("error:", e);
})
    .finally(() => {
    prismaClient_1.default.$disconnect();
});
