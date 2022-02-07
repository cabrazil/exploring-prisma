-- AlterTable
ALTER TABLE "courses" ADD COLUMN     "fk_id_teacher" TEXT;

-- AddForeignKey
ALTER TABLE "courses" ADD CONSTRAINT "courses_fk_id_teacher_fkey" FOREIGN KEY ("fk_id_teacher") REFERENCES "teachers"("id") ON DELETE SET NULL ON UPDATE CASCADE;
