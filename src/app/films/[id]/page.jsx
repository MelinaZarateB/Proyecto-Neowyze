import { fetchFilmsById } from "@/data";
import styles from "./detail.module.css";
import CardCharacter from "@/components/CardCharacter";

export default async function detailFilm({ params }) {
  const { id } = params;

  const filmById = await fetchFilmsById(id);

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
            <p>Episode {filmById.episode_id}</p>
            <p>Director: {filmById.director}</p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-center">Characters</h2>
      </div>
      <div className={styles.characters}>
      
      </div>
    </div>
  );
}
