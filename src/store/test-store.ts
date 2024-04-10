import { makeAutoObservable, runInAction } from "mobx";
import { getPeople } from "../shared/API/api";
import { typesPeople } from "../shared/types/typesPeople";

class PeopleStore {
  people: typesPeople[] = [];
  currentPage: number = 1;
  pageSize: number = 4;

  constructor() {
    makeAutoObservable(this);
    this.fetchPeople();
  }

  async fetchPeople() {
    try {
      const response = await getPeople();
      runInAction(() => {
        this.people = response.results;
      });
    } catch (error) {
      console.error("Error fetching people:", error);
    }
  }

  getDisplayedPeople() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.people.slice(startIndex, endIndex);
  }

  setCurrentPage(page: number) {
    this.currentPage = page;
  }


  getTotalPages() {
    return Math.ceil(this.people.length / this.pageSize);
  }
}

export default new PeopleStore();
