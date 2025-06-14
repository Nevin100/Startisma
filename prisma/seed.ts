import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  await prisma.user.createMany({
    data: [
     
      {
        name: "Test100",
        email: "Test100@gmail.com"
      },
      {
        name: "Test200",
        email: "Test200@gmail.com"
      },
      {
        name: "Test300",
        email: "Test300@gmail.com"
      },
      {
        name: "Test400",
        email: "Test400@gmail.com"
      }

    ]
  })
}

seed().then(() => prisma.$disconnect());
