/*
  Warnings:

  - The primary key for the `tb_hospedes` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "tb_hospedes" DROP CONSTRAINT "tb_hospedes_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "tb_hospedes_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "tb_hospedes_id_seq";

-- AlterTable
ALTER TABLE "tb_reservas" ALTER COLUMN "numeroreserva" SET DATA TYPE TEXT,
ALTER COLUMN "apartamento" SET DATA TYPE TEXT;
