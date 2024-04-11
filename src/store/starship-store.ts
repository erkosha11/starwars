import { makeAutoObservable, runInAction } from "mobx";
import { getStarShips } from "../shared/API/api";
import { typeStarShip } from "../shared/types/typesShips";

class StarShipStore {
  starship: typeStarShip[] = [];
  currentPage: number = 1;
  pageSize: number = 4;
  searchText: string = '';
  loading: boolean = true;

  constructor() {
    makeAutoObservable(this);
    this.fetchStarship();
  }

  async fetchStarship() {
    try {
      const response = await getStarShips();
      runInAction(() => {
        this.starship = response.results;
        this.loading = false;
      });
    } catch (error) {
      console.error("Error fetching starship:", error);
      runInAction(() => {
        this.loading = false;
    });
  }
}

  getDisplayedStarship() {
    const filteredStarship = this.starship.filter(ship =>
      ship.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return filteredStarship.slice(startIndex, endIndex);
  }

  setCurrentPage(page: number) {
    this.currentPage = page;
  }

  setSearchText(text: string) {
    this.searchText = text;
  }

  getTotalPages() {
    return Math.ceil(this.starship.length / this.pageSize);
  }
}

export default new StarShipStore();
