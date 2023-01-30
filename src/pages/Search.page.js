import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {pokemonActions} from "../redux";
import {Link} from "react-router-dom";
import Form from "../components/Form/Form";


export default function SearchPage(){


    const {search:searchPokemons} = useSelector(state => state.search);

    const {results:resName} =searchPokemons;

    const {allAbility} = useSelector(state => state.allAbility);

    const {results:resAbility} = allAbility;

    const {allType} = useSelector(state => state.allType);

    const {results:resType} = allType;


    const dispatch = useDispatch();

    useEffect(()=>{

        dispatch(pokemonActions.getSearchPokemon({offset:'0',limit:'1279'}));
        dispatch(pokemonActions.getAllAbility({offset:'0',limit:'358'}))
        dispatch(pokemonActions.getAllType({offset:'0',limit:'20'}))

    },[]);

    return(
        <div>
            <Form resName={resName} resAbility={resAbility} resType={resType} />
        </div>
    );
}







// {forms && forms.map((poke,index) =><PokemonInfo key={index} poke={poke}/>)}
// {pokemon && pokemon.map((pokemons,index) =><AbilityPokemon key={index} pokemons={pokemons}/>)}
// {pokemonType && pokemonType.map((pokemons,index) =><TypePokemon key={index} pokemons={pokemons}/>)}

// const {search} = useSelector(state => state.search);
// const {ability} = useSelector(state => state.ability);
// const {type} = useSelector(state => state.type);
