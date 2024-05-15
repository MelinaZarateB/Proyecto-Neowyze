import { fetchFilmsById } from "@/data";
import styles from "./detail.module.css";
import CardCharacter from "@/components/CardCharacter";
import { fetchCharactersByDetail } from "@/data";
import React, { Suspense } from "react";

export default async function detailFilm({ params }) {
  const { id } = params;
  const filmById = await fetchFilmsById(id);

  const LazyCharacters = React.lazy(() => import("./../../../components/CardCharacterByDetail"));

  return (
    <div className="text-white p-10">
      <div className={styles.container}>
        <div className={styles.containerImg}>
          <img
            src="https://lumiere-a.akamaihd.net/v1/images/avco_payoff_1-sht_v7_lg_32e68793.jpeg"
            className={styles.img}
          />
        </div>
        <div className={styles.containerDescription}>
          <h1 className={styles.title}>{filmById?.title}</h1>
          <div className={styles.data}>
            <div className="flex">
            <img width="30" height="48" className={styles.icon} src="https://img.icons8.com/color/48/star-wars-millenium-falcon.png" alt="star-wars-millenium-falcon"/>
            <p>Episode {filmById.episode_id}</p>
            </div>
            <div className="flex">
            <img width="30" height="48" className={styles.icon} src="https://img.icons8.com/color/48/star-wars-millenium-falcon.png" alt="star-wars-millenium-falcon"/>
            <p>Director: {filmById.director}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.secondDiv}>
        <h2 className={styles.titleCharacters}>Characters</h2>
        <hr className={styles.hr}/>
      </div>
      <div>
      <Suspense fallback={<div className="text-center">Loading...</div>}>
          <LazyCharacters filmById={filmById} />
        </Suspense>
      </div>
    </div>
  );
}
