// Import the framework and instantiate it
import * as FastifyRedis from "@fastify/redis";
import "dotenv/config";
import Fastify from "fastify";
import populationRoutes from "./routes/populationRoutes.js";

const fastify = Fastify({
  logger: true,
});

fastify.register(FastifyRedis, { url: process.env.REDIS_URL });

populationRoutes.forEach((r) => {
  fastify.route({ ...r });
});

fastify.get("/", function (request, reply) {
  reply.send({ hello: "world" });
});

fastify.listen(
  { host: "0.0.0.0", port: process.env.APP_PORT },
  function (err, address) {
    if (err) {
      fastify.log.error(err);
      process.exit(1);
    }
    console.log(`Server listening on ${address}`);
  }
);
