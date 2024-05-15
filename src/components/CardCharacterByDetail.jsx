import { fetchCharactersByDetail } from "@/data";
import CardCharacter from "./CardCharacter";
import styles from "./../app/films/[id]/detail.module.css";

export default async function CardCharacterByDetail({ filmById }) {
  const characters = await fetchCharactersByDetail(filmById.characters);

  return(
    <div className={styles.charactersContainer}>
      {characters?.map((char, index) => (
        <CardCharacter key={index} name={char.name} url={char.url} />
      ))}
    </div>
  )
};