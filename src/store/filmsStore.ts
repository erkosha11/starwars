import { fromPromise, IPromiseBasedObservable } from "mobx-utils";
import { getFilms } from "../shared/API/api";
import { makeAutoObservable } from "mobx";
import { ApiResponse } from "../shared/types/ApiResponse";
import { typeFilms } from "../shared/types/typeFilms";

class FilmsStore {
  filmsPromise: IPromiseBasedObservable<ApiResponse<typeFilms>>;
  displayCount = 1;

  constructor() {
    makeAutoObservable(this);
    this.filmsPromise = fromPromise(this.fetchFilms());
  }

  async fetchFilms() {
    const response = await getFilms();
    return response;
  }

  get films() {
    return this.filmsPromise.state === "fulfilled"
      ? this.filmsPromise.value.results
      : [];
  }

  get displayedFilms() {
    return this.films.slice(0, this.displayCount);
  }

  showMoreFilms() {
    if (this.displayCount < this.films.length) {
      this.displayCount += 1;
    }
  }

  resetDisplayCount() {
    this.displayCount = 1; 
  }
}

export default new FilmsStore();
