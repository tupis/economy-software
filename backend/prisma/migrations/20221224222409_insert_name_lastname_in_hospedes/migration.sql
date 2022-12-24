/*
  Warnings:

  - Added the required column `nome` to the `tb_hospedes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sobrenome` to the `tb_hospedes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tb_hospedes" ADD COLUMN     "nome" TEXT NOT NULL,
ADD COLUMN     "sobrenome" TEXT NOT NULL;
