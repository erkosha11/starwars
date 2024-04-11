import { makeAutoObservable } from "mobx";
import { fromPromise, IPromiseBasedObservable } from "mobx-utils";
import { getStarShips } from "../shared/API/api";
import { typeStarShip } from "../shared/types/typesShips";

class StarShipStore {
  starship: IPromiseBasedObservable<typeStarShip[]>;
  currentPage: number = 1;
  pageSize: number = 4;
  searchText: string = "";

  constructor() {
    makeAutoObservable(this);
    this.starship = fromPromise(this.fetchStarship());
  }

  async fetchStarship() {
    return getStarShips().then((response) => response.results);
  }

  getDisplayedStarship() {
    if (this.starship.state === "fulfilled") {
      const filteredStarship = this.starship.value.filter((ship) =>
        ship.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return filteredStarship.slice(startIndex, endIndex);
    }
    return [];
  }

  setCurrentPage(page: number) {
    this.currentPage = page;
  }

  setSearchText(text: string) {
    this.searchText = text;
    this.setCurrentPage(1);
  }

  getTotalPages() {
    return this.starship.state === "fulfilled"
      ? Math.ceil(this.starship.value.length / this.pageSize)
      : 0;
  }
}

export default new StarShipStore();
