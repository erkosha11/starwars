// import { action, makeObservable, observable } from "mobx";
// import { fromPromise, IPromiseBasedObservable } from "mobx-utils";

// export abstract class BaseEntityStore<T extends { name: string }> {
//   items?: IPromiseBasedObservable<T[]>;
//   currentPage: number = 1;
//   pageSize: number = 4;
//   searchText: string = "";

//   constructor() {
//     makeObservable(this, {
//       items: observable,
//       currentPage: observable,
//       pageSize: observable,
//       searchText: observable,
//       loadItems: action,
//       setCurrentPage: action,
//       setSearchText: action,
//       getDisplayedItems: action,
//       filterItem: action,
//       getTotalPages: action,
//     });
//   }

//   abstract fetchData(): Promise<{ results: T[] }>;

//   loadItems() {
//     const dataPromise = this.fetchData().then((response) => response.results);
//     this.items = fromPromise(dataPromise);
//   }

//   getDisplayedItems(): T[] {
//     if (this.items?.state === "fulfilled") {
//       return this.items.value
//         .filter((item) =>
//           item.name.toLowerCase().includes(this.searchText.toLowerCase())
//         )
//         .slice(
//           (this.currentPage - 1) * this.pageSize,
//           this.currentPage * this.pageSize
//         );
//     }
//     return [];
//   }
//   filterItem(item: T): boolean {
//     return item.name.toLowerCase().includes(this.searchText.toLowerCase());
//   }

//   setCurrentPage(page: number) {
//     this.currentPage = page;
//   }

//   setSearchText(text: string) {
//     this.searchText = text;
//   }

//   getTotalPages(): number {
//     return this.items?.state === "fulfilled"
//       ? Math.ceil(this.items.value.length / this.pageSize)
//       : 0;
//   }
// }
