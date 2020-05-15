## Denotrain
Some random stuffs with Deno and a http server `typescript` based.

### Basic
Basic file demonstrates how to create
an http server with `denotrain`. 
We can see an `app` instance, a route
and `promises`.

To run basic.ts file
```
deno run --allow-net=0.0.0.0 basic.ts
```

### Run viewengine
Viewegine file has a bit more of complexity, but show us how to create a http server that render a html page.

To run `viewengine.ts` file
```
deno run --allow-net=0.0.0.0 --allow-read viewengine.ts
```