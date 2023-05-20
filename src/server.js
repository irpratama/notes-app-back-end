/* eslint-disable linebreak-style */
const Hapi = require('@hapi/hapi');


const inti = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
  });

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};


inti();
