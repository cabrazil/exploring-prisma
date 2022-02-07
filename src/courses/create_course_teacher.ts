import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      duration: 500,
      name: "Curso de Java",
      description: "Curso de Java 17",
      teacher: {
        connectOrCreate: {
          where: {
            name: "Jason Borne"
          },
          create: {
            name: "Jason Borne"
          }
        }
      }
    },
  });

  console.log(result);
}

main();