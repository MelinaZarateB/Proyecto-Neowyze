import CardFilm from "@/components/CardFilm";
import styles from './films.module.css';
import { fetchFilms } from "@/data";

export default async function Films  () {
    const films = await fetchFilms()

  return (
    <div className={styles.containerFilms}>
      {films?.map((film) => (
        <CardFilm
          key={film.episode_id}
          title={film.title}
          episode={film.episode_id}
        />
      ))}
    </div>
  );
}
