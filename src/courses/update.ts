import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
const result = await prisma.courses.update({
  where: {
    id: "b3457c72-d99b-4df0-a678-39692a6c784e"
  },
  data: {
    duration: 320,
    description: "Curso atualizado para versão 2",
    name: "AngularJS 2"
  }
  
});

console.log(result);

}

main();