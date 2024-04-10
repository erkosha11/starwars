import { makeAutoObservable, runInAction } from "mobx";
import { getStarShips } from "../shared/API/api";
import { typeStarShip } from "../shared/types/typesShips";

class StarShipStore {
  starship: typeStarShip[] = [];
  currentPage: number = 1;
  pageSize: number = 4;

  constructor() {
    makeAutoObservable(this);
    this.fetchStarship();
  }

  async fetchStarship() {
    try {
      const response = await getStarShips();
      runInAction(() => {
        this.starship = response.results;
      });
    } catch (error) {
      console.error("Error fetching starship:", error);
    }
  }

  getDisplayedStarship() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.starship.slice(startIndex, endIndex);
  }

  setCurrentPage(page: number) {
    this.currentPage = page;
  }


  getTotalPages() {
    return Math.ceil(this.starship.length / this.pageSize);
  }
}

export default new StarShipStore();
