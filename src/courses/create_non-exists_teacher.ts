import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      duration: 400,
      name: "Curso de PHP",
      description: "Curso de PHP 9",
      teacher: {
        create: {
          name: "Nicole Kidman"
        },
      },
    },
  });

  console.log(result);
}

main();