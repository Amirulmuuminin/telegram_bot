import { Scenes, session, Telegraf } from "telegraf";
import { MyContext } from "./lib/extendContext";
import { pilihMurid } from "./lib/stepHandler/pilihMurid";
import { pilihKelas } from "./lib/stepHandler/pilihKelas";
import { endScene } from "./lib/stepHandler/endScene";
import { pilihInput } from "./lib/stepHandler/pilihInput";

const scene = new Scenes.WizardScene<MyContext>(
  "sibia",
  pilihKelas,
  pilihMurid,
  pilihInput,
  endScene
);
const stage = new Scenes.Stage<MyContext>([scene]);

const bot = new Telegraf<MyContext>(
  "6510459338:AAHTHLXxoGCeJjGVm-lzikKn9172AYiAAvM"
);

bot.use(session());
bot.use(stage.middleware());

bot.command("input", async (ctx) => await ctx.scene.enter("sibia"));

bot.launch();
