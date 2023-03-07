import { createSlice } from "@reduxjs/toolkit"

export const initialState = {
    count: 0,
    next: '',
    previous: [],
    results: []
}

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        getPokemon(state, action) {
            
        }
    }
});

export const { getPokemon } = pokemonSlice.actions;
const pokemonReducer = pokemonSlice.reducer;
export default pokemonReducer;