import { fromPromise, IPromiseBasedObservable } from "mobx-utils";
import { getPlanets } from "../shared/API/api";
import { makeAutoObservable } from "mobx";
import { ApiResponse } from "../shared/types/ApiResponse";
import { typePlanets } from "../shared/types/typePlanets";

class PlanetStore {
  planetPromise: IPromiseBasedObservable<ApiResponse<typePlanets>>;
  displayCountPlanets = 1;

  constructor() {
    makeAutoObservable(this);
    this.planetPromise = fromPromise(this.fetchFilms());
  }

  async fetchFilms() {
    const response = await getPlanets();
    return response;
  }

  get planets() {
    return this.planetPromise.state === "fulfilled"
      ? this.planetPromise.value.results
      : [];
  }

  get displayedPlanet() {
    return this.planets.slice(0, this.displayCountPlanets);
  }

  showMorePlanets() {
    if (this.displayCountPlanets < this.planets.length) {
      this.displayCountPlanets += 1;
    }
  }

  resetDisplayCountPlanets() {
    this.displayCountPlanets = 1;
  }
}

export default new PlanetStore();
