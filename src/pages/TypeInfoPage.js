import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {pokemonActions} from "../redux";
import TypePokemon from "../components/TypePokemon";

export default function TypeInfoPage(){

    const {name} = useParams();

    const dispatch = useDispatch();

    const {type} = useSelector(state => state.type);

    const {pokemon} = type;

    useEffect(()=>{
        dispatch(pokemonActions.getType({name:name}))
    },[])

    return(
        <div>
            <hr/>
            Pokemons:
            {
                pokemon && pokemon.map(pokemons=> <TypePokemon pokemons={pokemons}/>)
            }
        </div>
    );
}