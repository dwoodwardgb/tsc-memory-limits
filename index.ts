import fastify from "fastify";

const server = fastify();

server.get("/", async (req, reply) => {
  return "pong\n";
});

const PORT = process.env.PORT || 5000;
console.log("this is port", process.env.PORT, "this is what I got", PORT);
server.listen(PORT, "0.0.0.0", (err, addr) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("ready");
});
