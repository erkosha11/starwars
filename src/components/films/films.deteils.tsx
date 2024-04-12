import { observer } from "mobx-react-lite";
import { typeFilms } from "../../shared/types/typeFilms";
import s from "./films.module.scss";

interface FilmsDetailProps {
  film: typeFilms | null;
}

const FilmsDetail = observer(({ film }: FilmsDetailProps) => {
  if (!film) return <div>Film not found</div>;

  return (
    <>
      <div className={s.detailTitle}>
        <h1>{film.title}</h1>
      </div>

      <div>
        <p>Episode ID: {film.episode_id}</p>
        <p>Director: {film.director}</p>
        <p>Producer: {film.producer}</p>
      </div>
    </>
  );
});

export default FilmsDetail;
