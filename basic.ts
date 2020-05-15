import {
  Application,
  Context,
  Router,
} from "https://deno.land/x/denotrain@v0.4.0/mod.ts";

const app = new Application({ port: 3001 });
const router = new Router();

router.get("/", (ctx: Context) => {
  return new Promise((resolve) =>
    resolve({
      msg: "This is the admin interface!",
    })
  );
});

router.get("/edit", async (ctx: Context) => {
  return { msg: "This is an edit mode!" };
});

app.get("/", (ctx: Context) => {
  return { hello: "world" };
});

app.use("/admin", router);

app.get("/:id", (ctx: Context) => {
  return "Hello World with ID: " + ctx.req.params.id;
});

await app.run();
