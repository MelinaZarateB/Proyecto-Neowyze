/*import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setFilms } from "@/redux/slice"; */
import CardFilm from "@/components/CardFilm";
import styles from './films.module.css';
import { fetchFilms } from "@/data";

export default async function Films  () {
    const films = await fetchFilms()
  /*const dispatch = useDispatch();
 const films = useSelector((state) => state.valores.films); */

  /*const fetchFilms = async () => {
    try {
      const { data } = await axios.get("https://swapi.dev/api/films");
      console.log(data.results);

      dispatch(setFilms(data.results));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchFilms();
  }, []);*/

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
