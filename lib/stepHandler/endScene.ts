import { MyContext } from "../extendContext";

export async function endScene(ctx: MyContext) {
  await ctx.reply("Done");
  return await ctx.scene.leave();
}
