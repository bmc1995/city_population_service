import {
  getPopulation,
  setPopulation,
} from "../controllers/populationControllers.js";

const populationRoutes = [
  {
    method: "GET",
    url: "/api/population/state/:state/city/:city",
    handler: getPopulation,
  },
  {
    method: "PUT",
    url: "/api/population/state/:state/city/:city",
    handler: setPopulation,
  },
];

export default populationRoutes;
