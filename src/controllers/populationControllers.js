import {
  getPopulationFromRedis,
  setPopulationInRedis,
} from "../services/populationService.js";

export async function getPopulation(request, reply) {
  const { redis } = this;
  const { state, city } = request.params;
  if (!state || !city) {
    return reply.code(400).send({ error: "Missing parameter(s)" });
  }
  const population = await getPopulationFromRedis(redis, state, city);
  if (population) {
    return reply.send({ population: parseInt(population) });
  } else {
    return reply
      .code(400)
      .send({ error: "State / city combination not found." });
  }
}

export async function setPopulation(request, reply) {
  const { redis } = this;
  const { state, city } = request.params;
  if (!state || !city) {
    return reply.code(400).send({ error: "Missing parameter(s)" });
  }
  const population = request.body;
  const keyExists = await redis.exists([`${state}-${city}`]);
  await setPopulationInRedis(redis, state, city, population);
  if (!keyExists) reply.code(201);
  return reply.send({ message: "Population updated successfully." });
}
