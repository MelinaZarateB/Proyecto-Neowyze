import { fetchCharacterById } from "@/data";
import styles from './detail.module.css'

export default async function detailCharacter ({ params }) {
    const { id } = params;
    const characterById = await fetchCharacterById(id)

    return(
        <div className="text-white p-10">
            <div className={styles.container}>
        <div className={styles.containerImg}>
          <img  src="/iStock-511382960.jpg"
          alt="Image character" className={styles.img}/>
        </div>
        <div className={styles.containerDescription}>
          <h1 className={styles.title}>{characterById.name}</h1>
          <div className={styles.data}>
          {characterById.eye_color ?
          <div className="flex">
            <img width="30" className={styles.icon} src="https://img.icons8.com/color/48/death-star.png" alt="death-star" />
             <p>Eye color: {characterById.eye_color}</p>
            </div>
          : ""}
           {characterById.gender ?
          <div className="flex">
            <img width="30" className={styles.icon} src="https://img.icons8.com/color/48/death-star.png" alt="death-star" />
             <p>Gender: {characterById.gender}</p>
            </div>
          : ""}
           {characterById.birth_year ?
          <div className="flex">
            <img width="30" className={styles.icon} src="https://img.icons8.com/color/48/death-star.png" alt="death-star" />
             <p>Birth year: {characterById.birth_year}</p>
            </div>
          : ""}
           {characterById.hair_color ?
          <div className="flex">
            <img width="30" className={styles.icon} src="https://img.icons8.com/color/48/death-star.png" alt="death-star" />
             <p>Hair color: {characterById.hair_color}</p>
            </div>
          : ""}
           {characterById.height?
          <div className="flex">
            <img width="30" className={styles.icon} src="https://img.icons8.com/color/48/death-star.png" alt="death-star" />
             <p>Height: {characterById.height}</p>
            </div>
          : ""}
            {characterById.skin_color?
          <div className="flex">
            <img width="30" className={styles.icon} src="https://img.icons8.com/color/48/death-star.png" alt="death-star" />
             <p>Skin color: {characterById.skin_color}</p>
            </div>
          : ""}
          {characterById.mass?
          <div className="flex">
            <img width="30" className={styles.icon} src="https://img.icons8.com/color/48/death-star.png" alt="death-star" />
             <p>Mass: {characterById.mass}</p>
            </div>
          : ""}
          </div>
        </div>
      </div>
        </div>
    )
}