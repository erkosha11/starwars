import { observable, action, makeAutoObservable } from "mobx";
import { fromPromise, IPromiseBasedObservable } from "mobx-utils";
import createSwapiInstance from "../shared/API/base";

class SwapiStore {
  @observable people: IPromiseBasedObservable<any> | undefined;

  constructor() {
    makeAutoObservable(this);
  }

  @action.bound
  fetchPeople() {
    const swapiInstance = createSwapiInstance();
    this.people = fromPromise(swapiInstance.get("/people"));
  }
}

export default new SwapiStore();
