import { observable, action, makeObservable } from 'mobx';
import APIClient from '../../shared/api/apiClient';

class SwapiStore  {
  films: string[] = [];
  people: string[] = [];

  constructor() {
    makeObservable(this, {
      films: observable,
      people: observable,
      fetchFilms: action,
      fetchPeople: action,

    });
  }

  async fetchFilms() {
    try {
      const films = await APIClient.getFilms();
      this.films = films.results;
    } catch (error) {
      console.error('Failed to fetch films:', error);
    }
  }


  async fetchPeople() {
    try {
      const people = await APIClient.getPeople();
      this.people = people.results;
    } catch (error) {
      console.error('Failed to fetch people:', error);
    }
  }

}

export default new SwapiStore ();