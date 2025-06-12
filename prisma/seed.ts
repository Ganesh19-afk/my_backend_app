// prisma/seed.ts

import prisma from '../src/Db/prisma';
import { hashPassword } from '../src/scripts/hash'

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
    const adminExists = await prisma.user.findUnique({ where: { email: admin.email } });
    if (!adminExists) {
      await prisma.user.create({
        data: {
          name: admin.name,
          email: admin.email,
          password: await hashPassword(admin.password),
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
    await prisma.$disconnect();
  });
