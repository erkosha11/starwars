import { observer } from "mobx-react-lite";
import { typePlanets } from "../../shared/types/typePlanets";
import s from "./planets.module.scss";

interface PlanetsDetailProps {
  planets?: typePlanets | null;
}

const PlanetsDetail = observer(({ planets }: PlanetsDetailProps) => {
  if (!planets) return <div>Film not found</div>;

  return (
    <>
      <div className={s.detailTitle}>
        <h1>{planets.name}</h1>
      </div>

      <div>
        <p>Episode ID: {planets.rotation_period}</p>
        <p>Director: {planets.climate}</p>
        <p>Producer: {planets.population}</p>
      </div>
    </>
  );
});

export default PlanetsDetail;
