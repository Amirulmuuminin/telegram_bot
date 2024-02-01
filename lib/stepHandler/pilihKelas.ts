import { Markup } from "telegraf";
import { getAllKelas } from "../kelas";
import { MyContext } from "../extendContext";

export async function pilihKelas(ctx: MyContext) {
  const answerOptions = getAllKelas();
  const question = "Pilih Kelas...";
  await ctx.reply(question, Markup.inlineKeyboard(answerOptions));
  return ctx.wizard.next();
}
