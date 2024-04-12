import { fromPromise, IPromiseBasedObservable } from "mobx-utils";
import { getFilms } from "../shared/API/api";
import { makeAutoObservable } from "mobx";
import { ApiResponse } from "../shared/types/ApiResponse";
import { typeFilms } from "../shared/types/typeFilms";

class FilmsStore {
  filmsPromise: IPromiseBasedObservable<ApiResponse<typeFilms>>;
  displayCountFilms = 1;

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
    return this.films.slice(0, this.displayCountFilms);
  }

  showMoreFilms() {
    if (this.displayCountFilms < this.films.length) {
      this.displayCountFilms += 1;
    }
  }

  resetDisplayCountFilms() {
    this.displayCountFilms = 1; 
  }
}

export default new FilmsStore();
