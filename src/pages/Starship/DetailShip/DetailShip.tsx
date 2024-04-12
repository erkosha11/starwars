import { useParams, Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import s from "./DetailShip.module.scss";
import StarShipStore from "../../../store/starships-store";
import { AnimatedBox } from "../../../components/AnimatedBox/AnimatedBox";
import { Button } from "../../../shared/ui/Button/Button";
import filmsStore from "../../../store/films-store";
import FilmsDetail from "../../../components/films/films.deteils";
import { useEffect } from "react";
import planetsStore from "../../../store/planets-store";
import PlanetsDetail from "../../../components/planets/planets";

export const DetailShip = observer(() => {
  const { index } = useParams<{ index?: string }>();
  const starshipIndex = parseInt(index || "0");
  const starship = StarShipStore.getDisplayedStarship()[starshipIndex];

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

  if (!starship) {
    return <div>Starship not found</div>;
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
            <h1>{starship.name}</h1>
          </div>
        </div>
        <AnimatedBox>
          <div className={s.detailsText}>
            <div>
              <p>Model: {starship.model}</p>
              <p>Manufacturer: {starship.manufacturer}</p>
              <p>Cost in credits: {starship.cost_in_credits}</p>
            </div>
            <div>
              <p>Length: {starship.length}</p>
              <p>Speed: {starship.max_atmosphering_speed}</p>
              <p>Passengers: {starship.passengers}</p>
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
      <div className={s.detailPlanets}>
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
