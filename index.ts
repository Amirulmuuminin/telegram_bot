import { Telegraf, Markup } from "telegraf";
import { PrismaClient } from "@prisma/client";
import { getAllKelas } from "./lib/kelas";

const prisma = new PrismaClient();

const bot = new Telegraf("6510459338:AAHTHLXxoGCeJjGVm-lzikKn9172AYiAAvM");

const answerOptions = getAllKelas();

// Command handler example
bot.command("bismillah", (ctx) => {
  const question = "Pilih Kelas...";
  ctx.reply(question, Markup.inlineKeyboard(answerOptions));
});

// Handle button clicks
bot.action(/(.+)/, async (ctx) => {
  const clickedData = ctx.match[1];
  const murid = await prisma.murid.findMany({ where: { kelas: clickedData } });
  ctx.reply(murid[0].namaIndo);
});

// Add more handlers as needed

// Launch the bot
bot.launch();
