import { ApiResponse } from "../types/ApiResponse";
import { typesPeople } from "../types/typesPeople";
import { typeStarShip } from "../types/typesShips";
import { baseInstance } from "./base";

// export const getPeople = async () =>
//   (await baseInstance.get<typesPeople[]>("/people")).data;

// export const getStarShips = async () =>
//   (await baseInstance.get<typeStarShip[]>("/starships")).data;

export const getPeople = async (): Promise<ApiResponse<typesPeople>> => {
  const response = await baseInstance.get<ApiResponse<typesPeople>>("/people");
  return response.data;
};

export const getStarShips = async (): Promise<ApiResponse<typeStarShip>> => {
  const response = await baseInstance.get<ApiResponse<typeStarShip>>(
    "/starships"
  );
  return response.data;
};
