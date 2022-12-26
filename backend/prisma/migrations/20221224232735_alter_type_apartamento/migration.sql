/*
  Warnings:

  - Changed the type of `apartamento` on the `tb_reservas` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "tb_reservas" DROP COLUMN "apartamento",
ADD COLUMN     "apartamento" INTEGER NOT NULL;
