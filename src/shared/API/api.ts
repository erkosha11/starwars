import createSwapiInstance from "./base";


const swapiInstance = createSwapiInstance();

export const getPeople = async () => {
  return await swapiInstance.get("/people");
};

export const getStarships = async () => {
  return await swapiInstance.get("/starships");
};
