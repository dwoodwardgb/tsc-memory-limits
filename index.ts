import fastify from "fastify";

const server = fastify();

server.get("/", async (req, reply) => {
  return "pong\n";
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, (err, addr) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("ready");
});
