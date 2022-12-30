import {useDispatch, useSelector} from "react-redux";
import Pokemon from "../Pokemon/Pokemon";
import {useEffect} from "react";
import {pokemonActions} from "../../redux";

export default function Pokemons(){
    const {pokemons} = useSelector(state => state.pokemons);

    const {results} = pokemons;



    const dispatch = useDispatch();
    useEffect(()=>{
           dispatch(pokemonActions.getAll())
    },[])
    return(
        <div>
            {results && results.map(pokemon=><Pokemon key={pokemon.id} pokemon={pokemon}/>)}
        </div>
    );
}