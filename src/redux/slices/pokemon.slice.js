import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {pokemonServices} from "../../services";

const initialState = {
    pokemons:[],
    pokemon: [],
    forms:[],
    next: null,
    prev: null,
    search:[],
    ability:[],
    type:[],
    allAbility:[],
    allType:[]

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

const getSearchPokemon = createAsyncThunk(
    'pokemonSlice/getSearch',
             async({offset,limit}) =>{
                 const {data} = await pokemonServices.getAll(offset,limit)
                 return data
             }
);

const getAbility  = createAsyncThunk(
    'pokemonSlice/getAbility',
    async({name}) =>{
        const {data} = await pokemonServices.getAbility(name)
        return data
    }
);

const getAllAbility = createAsyncThunk(
    'pokemonSlice/getAllAbility',
    async({offset,limit}) =>{
        const {data} = await pokemonServices.getAllAbility(offset,limit)
        return data
    }
);

const getType  = createAsyncThunk(
    'pokemonSlice/getType',
    async({name}) =>{
        const {data} = await pokemonServices.getType(name)
        return data
    }
);

const getAllType = createAsyncThunk(
    'pokemonSlice/getAllType',
    async({offset,limit}) =>{
        const {data} = await pokemonServices.getAllType(offset,limit)
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
            .addCase(getSearchPokemon.fulfilled, (state, action) => {
                state.search = action.payload
            })
            .addCase(getAbility.fulfilled, (state, action) => {
                state.ability = action.payload
            })
            .addCase(getType.fulfilled, (state, action) => {
                state.type = action.payload
            })
            .addCase(getAllAbility.fulfilled,(state, action) => {
                state.allAbility = action.payload
            })
            .addCase(getAllType.fulfilled,(state, action) => {
                state.allType = action.payload
            })
});

const {reducer:pokemonReducer} = pokemonSlice;

const pokemonActions={
    getAll,
    getOne,
    getForms,
    getSearchPokemon,
    getAbility,
    getType,
    getAllType,
    getAllAbility
}

export {
    pokemonReducer,
    pokemonActions
}