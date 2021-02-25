const server = require('./api/server.js');

const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 8000;

server.listen(port, () => {
  console.log(`\n*** Server listening on ${host}:${port} ***`);
});