import { makeAutoObservable } from "mobx";
import { fromPromise, IPromiseBasedObservable } from "mobx-utils";
import { getPeople } from "../shared/API/api";
import { typesPeople } from "../shared/types/typesPeople";

class PeopleStore {
  people: IPromiseBasedObservable<typesPeople[]>;
  currentPage: number = 1;
  pageSize: number = 4;
  searchText: string = "";

  constructor() {
    makeAutoObservable(this);
    this.people = fromPromise(this.fetchPeople());
  }

  async fetchPeople() {
    return getPeople().then((response) => response.results);
  }

  getDisplayedPeople() {
    if (this.people.state === "fulfilled") {
      const filteredPeople = this.people.value.filter((person) =>
        person.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return filteredPeople.slice(startIndex, endIndex);
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
    return this.people.state === "fulfilled"
      ? Math.ceil(this.people.value.length / this.pageSize)
      : 0;
  }
}

export default new PeopleStore();
