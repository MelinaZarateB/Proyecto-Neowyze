"use client";
import { useEffect } from "react";
import { useState } from "react";
import CardCharacter from "@/components/CardCharacter";
import styles from "./characters.module.css";
import { fetchCharacters } from "@/data";
import InfiniteScroll from "react-infinite-scroll-component";


export default function Characters() {
  const [page, setPage] = useState(1);
  const [charactersRender, setCharactersRender] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const getMoreCharacters = async () => {
    try {
      const newChars = await fetchCharacters(page);
      if (newChars.length > 0) {
        setCharactersRender((prevChars) => [...prevChars, ...newChars]);
        setPage((prevPage) => prevPage + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
        setHasMore(false)
      console.error("Error fetching characters:", error);
    }
  };

  useEffect(() => {
    getMoreCharacters();
  }, []);

  return (
    <InfiniteScroll
      dataLength={charactersRender.length}
      next={getMoreCharacters}
      hasMore={hasMore}
      loader={<h4 style={{color:'white', textAlign:'center', fontWeight: '600'}}>Loading...</h4>}
      endMessage={<h4 style={{color: 'white', textAlign: 'center', fontWeight: '500', marginBottom: '16px'}}>
        No more characters!
      </h4>}
    >
      <div className={styles.containerCharacters}>
        {charactersRender?.map((char, index) => (
          <CardCharacter
            key={index}
            name={char.name}
            eyeColor={char.eye_color}
            gender={char.gender}
            url={char.url}
          />
        ))}
      </div>
    </InfiniteScroll>
  );
}
