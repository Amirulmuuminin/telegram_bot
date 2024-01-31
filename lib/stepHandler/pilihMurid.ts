import { Composer, Markup } from "telegraf";
import { getMuridByKelas } from "../murid";
import { MyContext } from "../extendContext";

// attach needed methods to Composer
export const pilihMurid = new Composer<MyContext>();

pilihMurid.action(/(.+)/, async (ctx) => {
  const selectedKelas = ctx.match[1];
  const murids = await getMuridByKelas(selectedKelas);
  const question = "Pilih Murid..";
  await ctx.reply(question, Markup.inlineKeyboard(murids));
  return ctx.wizard.next();
});
