import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {pokemonServices} from "../../services";

const initialState = {
    pokemons:[],
    pokemon:null

}
const getAll = createAsyncThunk(
    'pokemonSlice/getAll',
    async ()=>{

      const {data} = await  pokemonServices.getAll();
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
});

const {reducer:pokemonReducer} = pokemonSlice;

const pokemonActions={
    getAll,
    getOne
}

export {
    pokemonReducer,
    pokemonActions
}