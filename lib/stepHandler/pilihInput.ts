import { Composer, Markup } from "telegraf";
import { MyContext } from "../extendContext";
import { toMarkupKeyboard } from "../toMarkupKeyboard";

// attach needed methods to Composer
export const pilihInput = new Composer<MyContext>();

const data = ["Hafalan", "Murojaah hafalan", "Murojaah"];
const markupData = toMarkupKeyboard({ columns: 3, array: data });

pilihInput.action(/(.+)/, async (ctx) => {
  ctx.scene.session.murid = ctx.match[1];
  const question = "Pilih data yang akan diinput..";
  await ctx.reply(question, Markup.inlineKeyboard(markupData));
  return ctx.wizard.next();
});
