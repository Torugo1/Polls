import fastify from "fastify";
import cookie from "@fastify/cookie";
import { createPoll } from "./routes/create-poll";
import { getPoll } from "./routes/get-poll";
import { voteOnPoll } from "./routes/vote-on-poll";
import fastifyWebsocket from "@fastify/websocket";
import { pollResult } from "./ws/poll-results";

const app = fastify();

app.register(cookie, {
  secret: "my-secret",
  hook: "onRequest",
  parseOptions: {},
});
app.register(createPoll);
app.register(getPoll);
app.register(voteOnPoll);
app.register(fastifyWebsocket);
app.register(pollResult);

app.listen({ port: 3333 }).then(() => {
  console.log("http server running");
});
