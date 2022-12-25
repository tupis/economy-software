import { Request as req, Response as res } from "express";
import prisma from "../utils/prisma";

export const HotelController = {
  listAll: async (req: req, res: res) => {
    try {
      const allHotels = await prisma.tb_hotel.findMany();

      res.send(allHotels);
    } catch (error) {
      res.send("Erro ao listar todos os hotéis");
    }
  },
  search: async (req: req, res: res) => {
    const { id } = req.params;

    try {
      const findHotel = await prisma.tb_hotel.findUnique({
        where: {
          id: Number(id),
        },
        include: {
          reservas: true,
        },
      });

      if (findHotel === null) {
        throw new Error();
      }

      res.send(findHotel);
    } catch (error) {
      res.send("Erro ao achar o hotel");
    }
  },
  create: async (req: req, res: res) => {
    const { cidade, cnpj, estado, nome, pais, reservas } = req.body;

    try {
      const newHotel = await prisma.tb_hotel.create({
        data: {
          cidade,
          cnpj,
          estado,
          nome,
          pais,
          reservas,
        },
      });

      res.send(newHotel);
    } catch (error) {
      res.send("Erro ao criar hotel");
    }
  },
  update: async (req: req, res: res) => {
    const { id } = req.params;
    const { cidade, cnpj, estado, nome, pais, reservas } = req.body;

    try {
      const updateHotel = await prisma.tb_hotel.update({
        where: {
          id: Number(id),
        },

        data: {
          cidade,
          cnpj,
          estado,
          nome,
          pais,
          reservas,
        },
      });

      if (updateHotel === null) {
        throw new Error();
      }

      res.send(updateHotel);
    } catch (error) {
      res.send("Error ao atualizar hotel");
    }
  },
};
