import { makeAutoObservable, runInAction } from "mobx";
import { fromPromise, IPromiseBasedObservable } from "mobx-utils";
import { getFilms, getPeople, getStarShips } from "../shared/API/api";
import { typeFilms } from "../shared/types/typeFilms";
import { typesPeople } from "../shared/types/typesPeople";
import { typeStarShip } from "../shared/types/typesShips";

class InfoStore {
  people?: IPromiseBasedObservable<typesPeople[]>;
  starShip?: IPromiseBasedObservable<typeStarShip[]>;
  films?: IPromiseBasedObservable<typeFilms[]>;
  displayedFilmsCount = 1;

  constructor() {
    makeAutoObservable(this);
    this.initStore();
  }

  initStore() {
    this.getPeopleActions();
    this.getStarShipsActions();
    this.getFilmsActions();
  }

  async getPeopleActions() {
    const peoplePromise = getPeople().then((response) => response.results);
    this.people = fromPromise(peoplePromise);
  }

  async getStarShipsActions() {
    const starShipPromise = getStarShips().then((response) => response.results);
    this.starShip = fromPromise(starShipPromise);
  }

  async getFilmsActions() {
    const filmsPromise = getFilms().then((response) => response.results);
    this.films = fromPromise(filmsPromise);
  }

  showMoreFilms() {
    if (
      this.films?.state === "fulfilled" &&
      this.displayedFilmsCount < this.films.value.length
    ) {
      runInAction(() => {
        this.displayedFilmsCount++;
      });
    }
  }

  get displayedFilms() {
    return this.films?.state === "fulfilled"
      ? this.films.value.slice(0, this.displayedFilmsCount)
      : [];
  }
}

export default new InfoStore();
