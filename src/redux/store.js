import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {pokemonReducer,} from "./slices";

const rootReducer = combineReducers({
    pokemons:pokemonReducer,
    pokemon:pokemonReducer,
    forms:pokemonReducer,
    search:pokemonReducer,
    ability:pokemonReducer,
    type:pokemonReducer,
    allAbility:pokemonReducer,
    allType:pokemonReducer,
});

const setupStore = ()=> configureStore({
    reducer:rootReducer
});

export {
    setupStore
}