import {Link} from "react-router-dom";

export default function TypePokemon({pokemons}){

    const {pokemon} = pokemons;


    return (
        <Link to={`/Pokemons/${pokemon.name}`} state={pokemon}>
            <div>
                {pokemon.name}
            </div>
        </Link>
    );
}