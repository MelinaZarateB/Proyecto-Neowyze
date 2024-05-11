import characters from "@/app/characters/page";
import { createSlice } from "@reduxjs/toolkit";

export const Slice = createSlice({
    name: 'valores',
    initialState:{
        characters: [],
        films: []
    },
    reducers: {
        setCharacters: (state, action) => {
            state.characters = action.payload
        },
        setFilms: (state, action) => {
            state.films = action.payload
        }
    }
})
export const { setCharacters, setFilms } = Slice.actions;