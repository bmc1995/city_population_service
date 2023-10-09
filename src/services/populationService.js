export async function getPopulationFromRedis(redis, state, city) {
  console.log(`${state.toLowerCase()}-${city.toLowerCase()}`);
  return await redis.get(`${state.toLowerCase()}-${city.toLowerCase()}`);
}

export async function setPopulationInRedis(redis, state, city, population) {
  return await redis.set(
    `${state.toLowerCase()}-${city.toLowerCase()}`,
    population
  );
}
