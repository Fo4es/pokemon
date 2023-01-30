import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {pokemonActions} from "../redux";
import AbilityPokemon from "../components/Ability/AbilityPokemon";

export default function AbilityInfoPage(){

    const {name} = useParams();

    const dispatch = useDispatch();

    const {ability} = useSelector(state => state.ability);

    const {pokemon} = ability;

    useEffect(()=>{
        dispatch(pokemonActions.getAbility({name:name}))
    },[])

    return(
        <div>
            <br/>
            Pokemons:
            {
                pokemon && pokemon.map(pokemons=> <AbilityPokemon pokemons={pokemons}/>)
            }
        </div>
    );
}