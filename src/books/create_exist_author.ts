import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.books.create({
    data: {
      name: "Arquitetura limpa",
      author_id: "854324e4-3edf-4d3e-bbeb-ffa7d0f154ce",
    },
  });

  console.log(result);
}

main();