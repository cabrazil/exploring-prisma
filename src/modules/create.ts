import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.modules.create({
    data: {
      name: "Aprendendo firebase do zero",
      description: "Firebase",
      courses: {
        create: {
          course: {
            connect: {
              id: "9e7461c0-b5f5-4722-b0ac-5196719e3529"
            },
          },
        },
      },
    },
  });

  console.log(result);
}

main();