import { PrismaClient } from "@prisma/client";
import { toMarkupKeyboard } from "./toMarkupKeyboard";

const prisma = new PrismaClient();

export const getMuridByKelas = async (kelas: string) => {
  const murids = await prisma.murid.findMany({ where: { kelas } });
  const dataMurid = murids.map((item) => {
    return { nama: item.namaIndo, induk: item.induk };
  });
  const transfromToMarkup = toMarkupKeyboard({ columns: 2, data: dataMurid });
  return transfromToMarkup;
};
