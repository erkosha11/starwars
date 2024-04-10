import { useParams, Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import s from "./detail.module.scss";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import peopleStore from "../../../store/test-store";

export const PeopleDetails = observer(() => {
  const { index } = useParams<{ index?: string }>();
  const personIndex = parseInt(index || "0");
  const person = peopleStore.getDisplayedPeople()[personIndex];

  if (!person) {
    return <div>Person not found</div>;
  }

  return (
    <div className="container">
      <div className={s.detailContent}>
        <div className={s.detailTitle}>
          <Link to="/peopletest">
            <h2>
              <IoArrowBackCircleOutline />
            </h2>
          </Link>
          <h1>{person.name}</h1>
        </div>
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
      </div>
    </div>
  );
});
