import { makeAutoObservable } from "mobx";
import { fromPromise, IPromiseBasedObservable } from "mobx-utils";
import { getPeople, getStarShips } from "../shared/API/api";
import { typesPeople } from "../shared/types/typesPeople";
import { typeStarShip } from "../shared/types/typesShips";

class InfoStore {
  people?: IPromiseBasedObservable<typesPeople[]>;
  starShip?: IPromiseBasedObservable<typeStarShip[]>;

  constructor() {
    makeAutoObservable(this);
  }

  getPeopleActions = async () => {
    const peoplePromise = getPeople();
    this.people = fromPromise(
      peoplePromise.then((response) => response.results)
    );
  };

  getStarShipsActions = async () => {
    const starShipPromise = getStarShips();
    this.starShip = fromPromise(
      starShipPromise.then((response) => response.results)
    );
  };
}
export default new InfoStore();