import { fetchCharacterById } from "@/data";
import styles from './detail.module.css'


export default async function detailCharacter ({ params }) {
    const { id } = params;
    console.log('id del detail character' + id)
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
          {characterById.eye_color ? <p>Eye color: {characterById.eye_color}</p> : ""}
          {characterById.gender ?  <p>Gender: {characterById.gender}</p> : ""}
          </div>
        </div>
      </div>
        </div>
    )
}