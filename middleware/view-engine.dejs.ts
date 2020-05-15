import { render } from "https://deno.land/x/dejs@0.4.0/mod.ts";
import {
  ViewEngine,
  Context,
} from "https://deno.land/x/denotrain@v0.4.0/mod.ts";

export class DejsEngine extends ViewEngine {
  protected async _render(
    template: string,
    data: { [_: string]: any },
    ctx: Context
  ): Promise<void> {
    ctx.res.setBody(await render(template, data)).setMimeType("text/html");
  }
}
