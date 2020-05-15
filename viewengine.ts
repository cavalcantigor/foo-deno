import {
  Application,
  Context,
  Router,
} from "https://deno.land/x/denotrain@v0.4.0/mod.ts";
import { DejsEngine } from "./middleware/view-engine.dejs.ts";

const app = new Application({
  port: 3001,
  viewEngine: new DejsEngine("./templates"),
});

app.get("/home", async (ctx: Context) => {
  await ctx.res.render("index.ejs", { name: "World" });
  return true;
});

await app.run();
