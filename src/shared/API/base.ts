
import axios from "axios";

export const baseInstance = axios.create({
  baseURL: "https://swapi.dev/api",
  headers: {},
});

import axios, { AxiosInstance } from "axios";
import WarningUi from "../ui/WarningUi/WarningUi";

function createSwapiInstance(): AxiosInstance {
  const instance = axios.create({
    baseURL: "https://swapi.dev/api",
    headers: {},
  });

  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response) {
        const { status } = error.response;

        if (status === 401) {
          WarningUi({
            type: "error",
            text: "Unauthorized: Access is denied due to invalid credentials.",
          });
        } else if (status === 404) {
          WarningUi({
            type: "error",
            text: "The resource you are looking for might have been removed, had its name changed, or is temporarily unavailable.",
          });
        } else if (status === 500) {
          WarningUi({
            type: "error",
            text: "Internal Server Error: Something went wrong on our end.",
          });
        }
      } else {
        WarningUi({
          type: "error",
          text: "Network Error: Unable to connect to the server.",
        });
      }
      return Promise.reject(error);
    }
  );

  return instance;
}

export default createSwapiInstance;

