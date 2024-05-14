import axios from "axios";

export const fetchCharacters = async (page=1) => {
  try {
    const { data } = await axios.get(`https://swapi.dev/api/people/?page=${page}`);
    if (data.results) {
      const charactersFiltered = data.results.map((character) => {
        let characterFiltered = {};
        Object.entries(character).forEach(([key, value]) => {
          if (value !== "n/a" && value !== "unknown") {
            characterFiltered[key] = value;
          }
        });
        return characterFiltered;
      });
      console.log(charactersFiltered);
      return charactersFiltered;
    }
  } catch (err) {
    console.log(err);
  }
};

export const fetchFilms = async () => {
  try {
    const { data } = await axios.get("https://swapi.dev/api/films");
    console.log(data.results);
    return data.results
  } catch (err) {
    console.log(err);
  }
};

export const fetchFilmsById = async (id) => {
    console.log('id del data.js' + id)
    try{
        const { data } = await axios.get(`https://swapi.dev/api/films/${id}`)
        return data

    }catch(err){
        console.log(err)
    }
}

export const fetchCharacterById = async (id) => {
    try{
        const { data } = await axios.get(`https://swapi.dev/api/people/${id}`)
        return data

    }catch(err){
        console.log(err)
    }
}