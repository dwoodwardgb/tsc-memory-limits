import fastify from 'fastify'

const server = fastify();

server.get('/ping', async (req, reply) => {
  return 'pong\n';
});

server.listen(8000, (err, addr) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  console.log(`Listening on ${addr}`);
});
