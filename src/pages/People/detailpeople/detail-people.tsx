import { useParams, Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import s from "./detail-people.module.scss";
import { AnimatedBox } from "../../../components/AnimatedBox/AnimatedBox";
import { Button } from "../../../shared/ui/Button/Button";
import FilmsDetail from "../../../components/films/films.deteils.tsx";
import peopleStore from "../../../store/people-store.ts";
import filmsStore from "../../../store/films-store.ts";
import { useEffect } from "react";
import planetsStore from "../../../store/planets-store.ts";
import PlanetsDetail from "../../../components/planets/planets.tsx";

export const PeopleDetails = observer(() => {
  const { index } = useParams<{ index?: string }>();
  const personIndex = parseInt(index || "0");
  const person = peopleStore.getDisplayedPeople()[personIndex];

  useEffect(() => {
    return () => {
      filmsStore.resetDisplayCountFilms();
      planetsStore.resetDisplayCountPlanets();
    };
  }, []);

  const loadMoreFilms = () => {
    filmsStore.showMoreFilms();
  };
  const loadMorePlanets = () => {
    planetsStore.showMorePlanets();
  };

  if (!person) {
    return <div>Person not found</div>;
  }

  return (
    <div className="container">
      <div className={s.detailContent}>
        <div className={s.Header}>
          <div className={s.headerBtns}>
            <Link to="/peopletest">
              <Button>People</Button>
            </Link>
            <Link to="/starship">
              <Button>Starship</Button>
            </Link>
          </div>
          <div className={s.headerTitle}>
            <h1>{person.name}</h1>
          </div>
        </div>
        <AnimatedBox>
          <div className={s.detailsText}>
            <div>
              <p>Height: {person.height}</p>
              <p>Mass: {person.mass}</p>
              <p>Hair color: {person.hair_color}</p>
              <p>Skin color: {person.skin_color}</p>
            </div>
            <div>
              <p>Eye color: {person.eye_color}</p>
              <p>Birth year: {person.birth_year}</p>
              <p>Gender: {person.gender}</p>
            </div>
          </div>
        </AnimatedBox>
      </div>
      <div className={s.detailsFilm}>
        {filmsStore.displayedFilms.map((film, index) => (
          <FilmsDetail key={index} film={film} />
        ))}
        {filmsStore.displayCountFilms < filmsStore.films.length ? (
          <Button onClick={loadMoreFilms}>ЕЩЕ</Button>
        ) : (
          <h1>Фильмы закончились, надеюсь вам понравилось</h1>
        )}
      </div>

      <div className={s.detailsPlanet}>
        {planetsStore.displayedPlanet.map((planets, index) => (
          <PlanetsDetail key={index} planets={planets} />
        ))}
        {planetsStore.displayCountPlanets < planetsStore.planets.length ? (
          <Button onClick={loadMorePlanets}>ЕЩЕ</Button>
        ) : (
          <h1>Приятного полета</h1>
        )}
      </div>
    </div>
  );
});
