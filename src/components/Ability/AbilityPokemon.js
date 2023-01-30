import {Link} from "react-router-dom";

export default function AbilityPokemon({pokemons}) {

    const {pokemon} = pokemons;

    return (
        <Link to={`/Pokemons/${pokemon.name}`} state={pokemon}>
            <div>
                {pokemon.name}
            </div>
        </Link>
    );
}