import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.authors.create({
    data: {
      name: "Rober C. Martin",
      books: {
        create: {
          name: "Código livre"
        },
      },
    }
  });

  console.log(result);
}

main();