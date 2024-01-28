import { Markup, Scenes, session, Telegraf } from "telegraf";
import { getAllKelas } from "./lib/kelas";

interface MyWizardSession extends Scenes.WizardSessionData {
  // available in scene context under ctx.scene.session.kelas
  kelas: string;
  murid: string;
  h: {
    hal: number;
    ayat: number;
  };
  m: {};
}

type MyContext = Scenes.WizardContext<MyWizardSession>;

const scene = new Scenes.WizardScene<MyContext>(
  "sceneId",
  async (ctx) => {
    const answerOptions = getAllKelas();
    const question = "Pilih Kelas...";
    await ctx.reply(question, Markup.inlineKeyboard(answerOptions));
    return ctx.wizard.next();
  },
  async (ctx) => {
    await ctx.reply("Step 2");
    return ctx.wizard.next();
  },
  async (ctx) => {
    await ctx.reply("Done");
    return await ctx.scene.leave();
  }
);
const stage = new Scenes.Stage<MyContext>([scene]);

const bot = new Telegraf<MyContext>(process.env.BOT_TOKEN!);

bot.use(session());
bot.use(stage.middleware());

bot.command("yaumiyah", async (ctx) => await ctx.scene.enter("sceneId"));

bot.launch();
