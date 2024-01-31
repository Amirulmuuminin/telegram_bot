import { PrismaClient } from "@prisma/client";
import { toMarkupKeyboard } from "./toMarkupKeyboard";

const prisma = new PrismaClient();

export const getMuridByKelas = async (kelas: string) => {
  const dataMurid = await prisma.murid.findMany({ where: { kelas } });
  const namaMurid = dataMurid.map((item) => {
    return item.namaIndo;
  });
  const transfromToMarkup = toMarkupKeyboard(namaMurid, 2);
  return transfromToMarkup;
};
