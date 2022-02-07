import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      duration: 300,
      name: "Curso de Vue",
      description: "Curso de Vue",
      teacher: {
        connect: {
          id: "54d776fd-5559-4d86-a5ee-99c1cec34e89"
        }
      }
    },
  });

  console.log(result);
}

main();