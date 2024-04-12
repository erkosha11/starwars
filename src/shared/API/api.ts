import { ApiResponse } from "../types/ApiResponse";
import { typeFilms } from "../types/typeFilms";
import { typePlanets } from "../types/typePlanets";
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
};

export const getFilms = async (): Promise<ApiResponse<typeFilms>> => {
  const response = await baseInstance.get<ApiResponse<typeFilms>>("/films");
  return response.data;
};

export const getPlanets = async (): Promise<ApiResponse<typePlanets>> => {
  const response = await baseInstance.get<ApiResponse<typePlanets>>("/planets");
  return response.data;
};
