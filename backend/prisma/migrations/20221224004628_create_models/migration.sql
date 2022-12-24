-- CreateTable
CREATE TABLE "tb_hotel" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "pais" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,

    CONSTRAINT "tb_hotel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tb_reservas" (
    "id" SERIAL NOT NULL,
    "idhotel" INTEGER,
    "numeroreserva" TEXT NOT NULL,
    "apartamento" TEXT NOT NULL,
    "datacheckin" TIMESTAMP(3) NOT NULL,
    "datacheckout" TIMESTAMP(3),
    "status" INTEGER NOT NULL,

    CONSTRAINT "tb_reservas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tb_hospedes" (
    "id" SERIAL NOT NULL,
    "tb_reservasId" INTEGER,

    CONSTRAINT "tb_hospedes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tb_reservas" ADD CONSTRAINT "tb_reservas_idhotel_fkey" FOREIGN KEY ("idhotel") REFERENCES "tb_hotel"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tb_hospedes" ADD CONSTRAINT "tb_hospedes_tb_reservasId_fkey" FOREIGN KEY ("tb_reservasId") REFERENCES "tb_reservas"("id") ON DELETE SET NULL ON UPDATE CASCADE;
