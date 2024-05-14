import axios from "axios";
import filteredData from "./helpers/filteredData";

export const fetchCharacters = async (page = 1) => {
  try {
    const { data } = await axios.get(
      `https://swapi.dev/api/people/?page=${page}`
    );
    if (data.results) {
      const charactersFiltered = data.results.map(filteredData);
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
    return data.results;
  } catch (err) {
    console.log(err);
  }
};

export const fetchFilmsById = async (id) => {
  console.log("id del data.js" + id);
  try {
    const { data } = await axios.get(`https://swapi.dev/api/films/${id}`);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchCharacterById = async (id) => {
  try {
    const { data } = await axios.get(`https://swapi.dev/api/people/${id}`);
    const characterFilteredById = filteredData(data);
    return characterFilteredById;
  } catch (err) {
    console.log(err);
  }
};

export const fetchCharactersByDetail = async (urls) => {
  try {
    const characters = [];
    for (const url of urls) {
      const response = await axios.get(url);
      characters.push(response.data);
    }
    return characters;
  } catch (err) {
    console.log(err);
  }
};
