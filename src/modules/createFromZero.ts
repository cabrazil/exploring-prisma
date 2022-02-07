import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.coursesModules.create({
    data: {
      course: {
        create: {
          duration: 200,
          name: "Curso de Mongodb",
          description: "Curso de MongoDB Cloud"
        }
      },
      module: {
        create: {
          description: "Fundamentos PrismaIO",
          name: "PrismaIO",
        },
      },
    }
  });

  console.log(result);
}

main();