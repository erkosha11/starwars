import { Link, useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import InfoStore from "../../store/base-store";
import s from "./PersonDetail.module.scss";
import { IoArrowBackCircleOutline } from "react-icons/io5";
const PersonDetails = observer(() => {
  const { id } = useParams<{ id: string | undefined }>();
  const index = parseInt(id || "", 10);

  const { people } = InfoStore;

  if (!people) return null;

  const person = people.state === "fulfilled" ? people.value[index] : null;

  if (!person) return <div>Person not found</div>;

  return (
    <div className="container">
      <div className={s.detailContent}>
        <div className={s.detailTitle}>
          <Link to="/people-page">
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
            <p>Homeworld: {person.homeworld}</p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default PersonDetails;
