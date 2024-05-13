'use client'
import { useEffect } from "react"
import { setCharacters } from "@/redux/slice";
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios';
import CardCharacter from "@/components/CardCharacter";
import styles from './characters.module.css';


export default function characters () {
    const characters = useSelector((state) => state.valores.characters)
    const dispatch = useDispatch()

    const fetchCharacters = async () => {
        try {
            const { data } = await axios.get('https://swapi.dev/api/people');
            console.log(data.results);
            if (data.results) {
                const charactersFiltered = data.results.map((character) => {
                    let characterFiltered = {};
                    Object.entries(character).forEach(([key, value]) => {
                        if (value !== 'n/a' && value !== 'unknown') {
                            characterFiltered[key] = value;
                        }
                    });
                    return characterFiltered;
                });
                console.log(charactersFiltered);
                dispatch(setCharacters(charactersFiltered));
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchCharacters()
    },[])

    return(
       <div className={styles.containerCharacters}>
        {characters?.map((char, index) => (
            <CardCharacter
            key={index}
            name={char.name}
            eyeColor={char.eye_color}
            gender={char.gender} />
        ))}
       </div>
    )
}