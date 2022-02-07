import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Select * from courses limit 1
  // Select * from courses order by id desc limit 1
const course = await prisma.courses.findFirst({
  take: -1,
});

console.log(course);

}

main();