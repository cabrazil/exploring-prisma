import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.findMany({
    where: {
      id: "dd6d3ab3-2da8-447d-90f1-dfb9b72912b8",
    },
    include: {
      modules: true,
    },
  });

  console.log(JSON.stringify(result));
}

main();