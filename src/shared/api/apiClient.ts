import axios from 'axios';

const SWAPI_BASE_URL = 'https://swapi.dev/api/';

class APIClient {
  async getFilms() {
    const response = await axios.get(`${SWAPI_BASE_URL}films/`);
    return response.data;
  }

  async getPeople() {
    const response = await axios.get(`${SWAPI_BASE_URL}people/`);
    return response.data;
  }

  async getPlanets () {
    const response = await axios.get(`${SWAPI_BASE_URL}planets/`);
    return response.data;
  }

  async getSpecies () {
    const response = await axios.get(`${SWAPI_BASE_URL}species/`);
    return response.data;
  }

  async getVehicles() {
    const response = await axios.get(`${SWAPI_BASE_URL}vehicles/`);
    return response.data;
  }

  async getStarship  () {
    const response = await axios.get(`${SWAPI_BASE_URL}starship/`);
    return response.data;
  }

}

export default new APIClient();