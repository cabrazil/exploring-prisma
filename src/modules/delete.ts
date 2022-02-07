import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.coursesModules.delete({
    where: {
      id: "4fa4d943-6ed1-40f5-9d2d-d924f44d37c8",
    },
  });

  console.log(result);
}

main();