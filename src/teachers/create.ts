import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const teacher = await prisma.teachers.create({
    data: {
      name: "John Wick",
    },
  });

  console.log(teacher);
}

main();