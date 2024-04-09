import { Link, useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import InfoStore from "../../store/base-store";
import s from "./PersonDetail.module.scss";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import FilmsDetail from "./films/films.deteils";
import { Button } from "../../shared/ui/Button/Button";
const PersonDetails = observer(() => {
  const { id } = useParams<{ id: string | undefined }>();
  const index = parseInt(id || "", 10);

  const { people } = InfoStore;

  if (!people || people.state === "pending") return <div>Loading...</div>;
  if (people.state === "rejected") return <div>OOPSSS... IT'S ERROR...</div>;

  const person = people.value[index];

  if (!person) return <div>Person not found</div>;

  return (
    <div className="container" style={{ justifyContent: "space-between" }}>
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
          </div>
        </div>
      </div>
      {InfoStore.displayedFilms.map((film, index) => (
        <FilmsDetail key={index} film={film} />
      ))}
      {InfoStore.films?.state === "fulfilled" &&
        InfoStore.displayedFilmsCount < InfoStore.films.value.length && (
          <Button onClick={() => InfoStore.showMoreFilms()}>ЕЩЕ</Button>
        )}
    </div>
  );
});

export default PersonDetails;
