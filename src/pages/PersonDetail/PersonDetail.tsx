import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import InfoStore from "../../store/base-store";
import s from "./PersonDetail.module.scss";
const PersonDetails = observer(() => {
  const { id } = useParams<{ id: string | undefined }>();
  const index = parseInt(id || "", 10);

  const { people } = InfoStore;

  if (!people) return null;

  const person = people.state === "fulfilled" ? people.value[index] : null;

  if (!person) return <div>Person not found</div>;

  return (
    <div className="container">
      <div className={s.detailsText}>
        <h1>{person.name}</h1>
        <p>Height: {person.height}</p>
        <p>Mass: {person.mass}</p>
        <p>Hair color: {person.hair_color}</p>
        <p>Skin color: {person.skin_color}</p>
        <p>Eye color: {person.eye_color}</p>
        <p>Birth year: {person.birth_year}</p>
        <p>Gender: {person.gender}</p>
        <p>Homeworld: {person.homeworld}</p>
      </div>
    </div>
  );
});

export default PersonDetails;
