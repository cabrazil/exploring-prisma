import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.coursesModules.create({
    data: {
      fk_id_course: "b3457c72-d99b-4df0-a678-39692a6c784e",
      fk_id_module: "67ab3281-791b-430b-a1b6-e833efc9e555",
    }
  });

  console.log(result);
}

main();