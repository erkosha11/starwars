// import { makeAutoObservable } from "mobx";
// import { fromPromise, IPromiseBasedObservable } from "mobx-utils";
// import { getPeople, getStarShips } from "../shared/API/api";
// import { typesPeople } from "../shared/types/typesPeople";
// import { typeStarShip } from "../shared/types/typesShips";

// class EntityStore {
//   people?: IPromiseBasedObservable<typesPeople[]>;
//   starShips?: IPromiseBasedObservable<typeStarShip[]>;
//   currentPage: number = 1;
//   pageSize: number = 4;
//   searchText: string = "";

//   constructor() {
//     makeAutoObservable(this);
//     this.fetchPeople();
//     this.fetchStarShips();
//   }

//   fetchPeople() {
//     const peoplePromise = getPeople().then((response) => response.results);
//     this.people = fromPromise(peoplePromise);
//   }

//   fetchStarShips() {
//     const starShipsPromise = getStarShips().then(
//       (response) => response.results
//     );
//     this.starShips = fromPromise(starShipsPromise);
//   }

//   getDisplayedStarship() {
//     if (this.starShips?.state === "fulfilled") {
//       const filteredStarship = this.starShips.value.filter((ship) =>
//         ship.name.toLowerCase().includes(this.searchText.toLowerCase())
//       );
//       const startIndex = (this.currentPage - 1) * this.pageSize;
//       const endIndex = startIndex + this.pageSize;
//       return filteredStarship.slice(startIndex, endIndex);
//     }
//     return [];
//   }

//   getDisplayedPeople() {
//     if (this.people?.state === "fulfilled") {
//       const filteredPeople = this.people.value.filter((person) =>
//         person.name.toLowerCase().includes(this.searchText.toLowerCase())
//       );
//       const startIndex = (this.currentPage - 1) * this.pageSize;
//       const endIndex = startIndex + this.pageSize;
//       return filteredPeople.slice(startIndex, endIndex);
//     }
//     return [];
//   }

//   setCurrentPage(page: number) {
//     this.currentPage = page;
//   }

//   setSearchText(text: string) {
//     this.searchText = text;
//   }

//   getTotalPages(entity: "people" | "starShips"): number {
//     let length: number = 0;
//     if (entity === "people" && this.people?.state === "fulfilled") {
//       length = this.people.value.length;
//     } else if (
//       entity === "starShips" &&
//       this.starShips?.state === "fulfilled"
//     ) {
//       length = this.starShips.value.length;
//     }
//     return Math.ceil(length / this.pageSize);
//   }
// }

// export default new EntityStore();
