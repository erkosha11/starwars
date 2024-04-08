
import { ApiResponse } from "../types/ApiResponse";
import { typesPeople } from "../types/typesPeople";
import { typeStarShip } from "../types/typesShips";
import { baseInstance } from "./base";

export const getPeople = async (): Promise<ApiResponse<typesPeople>> => {
  const response = await baseInstance.get<ApiResponse<typesPeople>>("/people");
  return response.data;
};

export const getStarShips = async (): Promise<ApiResponse<typeStarShip>> => {
  const response =
    await baseInstance.get<ApiResponse<typeStarShip>>("/starships");
  return response.data;

import createSwapiInstance from "./base";


const swapiInstance = createSwapiInstance();

export const getPeople = async () => {
  return await swapiInstance.get("/people");
};

export const getStarships = async () => {
  return await swapiInstance.get("/starships");

};
