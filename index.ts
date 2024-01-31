import { Markup, Scenes, session, Telegraf } from "telegraf";
import { getAllKelas } from "./lib/kelas";
import { MyContext } from "./lib/extendContext";
import { pilihMurid } from "./lib/stepHandler/pilihMurid";

const scene = new Scenes.WizardScene<MyContext>(
  "sibia",
  async (ctx) => {
    const answerOptions = getAllKelas();
    const question = "Pilih Kelas...";
    await ctx.reply(question, Markup.inlineKeyboard(answerOptions));
    return ctx.wizard.next();
  },
  pilihMurid,
  async (ctx) => {
    await ctx.reply("Done");
    return await ctx.scene.leave();
  }
);
const stage = new Scenes.Stage<MyContext>([scene]);

const bot = new Telegraf<MyContext>(
  "6510459338:AAHTHLXxoGCeJjGVm-lzikKn9172AYiAAvM"
);

bot.use(session());
bot.use(stage.middleware());

bot.command("input", async (ctx) => await ctx.scene.enter("sibia"));

bot.launch();
