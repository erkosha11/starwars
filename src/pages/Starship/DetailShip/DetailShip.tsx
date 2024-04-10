import { useParams, Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import s from "./DetailShip.module.scss";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import StarShipStore from "../../../store/starship-store";

export const DetailShip = observer(() => {
  const { index } = useParams<{ index?: string }>();
  const personIndex = parseInt(index || "0");
  const person = StarShipStore.getDisplayedStarship()[personIndex];

  if (!person) {
    return <div>Person not found</div>;
  }

  return (
    <div className="container">
      <div className={s.detailContent}>
        <div className={s.detailTitle}>
          <Link to="/starship">
            <h2>
              <IoArrowBackCircleOutline />
            </h2>
          </Link>
          <h1>{person.name}</h1>
        </div>
        <div className={s.detailsText}>
          <div>
            <p>Model: {person.model}</p>
            <p>Manufacturer: {person.manufacturer}</p>
            <p>Cost in credits: {person.cost_in_credits}</p>
          </div>
          <div>
            <p>Length: {person.length}</p>
            <p>Speed: {person.max_atmosphering_speed}</p>
            <p>Passengers: {person.passengers}</p>
          </div>
        </div>
      </div>
    </div>
  );
});
