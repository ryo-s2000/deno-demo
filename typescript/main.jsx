/** @jsx h */

import { serve } from "https://deno.land/std@0.140.0/http/server.ts";
import { h, renderSSR } from "https://deno.land/x/nano_jsx@v0.0.20/mod.ts";

function App() {
  return (
    <html>
      <head>
        <title>Hello from JSX</title>
        {/* <link rel="stylesheet" href="./main.css" /> */}
        {/* <link rel="stylesheet" type="text/css" href="main.css"></link> */}
        <link rel="stylesheet" type="text/css" href="./main.css"></link>
      </head>
      <body>
        <h1>Hello world</h1>
        <LikeButton />
      </body>
    </html>
  );
}

function LikeButton() {
  const count = 999;
  return <span class="likeButton">like {count}</span>;
}

function handler(req) {
  const html = renderSSR(<App />);
  return new Response(html, {
    headers: {
      "content-type": "text/html",
    },
  });
}

serve(handler);
