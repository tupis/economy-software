/*
  Warnings:

  - Changed the type of `numeroreserva` on the `tb_reservas` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "tb_reservas" DROP COLUMN "numeroreserva",
ADD COLUMN     "numeroreserva" INTEGER NOT NULL,
ALTER COLUMN "datacheckin" SET DATA TYPE TEXT,
ALTER COLUMN "datacheckout" SET DATA TYPE TEXT;
