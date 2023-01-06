import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {pokemonServices} from "../../services";

const initialState = {
    pokemons:[],
    pokemon: [],
    forms:[],
    next: null,
    prev: null

}
const getAll = createAsyncThunk(
    'pokemonSlice/getAll',
    async ({offset})=>{

      const {data} = await  pokemonServices.getAll(offset);
      return data
    }
);

const getOne = createAsyncThunk(
    'pokemonSlice/getOne',
    async ({name})=>{

        const {data} = await pokemonServices.getOne(name);
        return data
    }
);

const getForms = createAsyncThunk(
    'pokemonSlice/getForms',
    async ({name})=>{

        const {data} = await pokemonServices.getForms(name);
        return data
    }
);



const pokemonSlice = createSlice({
    name:'pokemonSlice',
    initialState,
    reducers:{
        
    },
    extraReducers:(builder) =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.pokemons = action.payload
            })
            .addCase(getOne.fulfilled,(state, action) => {
                state.pokemon = action.payload
            })
            .addCase(getForms.fulfilled,(state, action) => {
                state.forms = action.payload
            })
});

const {reducer:pokemonReducer} = pokemonSlice;

const pokemonActions={
    getAll,
    getOne,
    getForms
}

export {
    pokemonReducer,
    pokemonActions
}