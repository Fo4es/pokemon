import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import {pokemonActions} from "../redux";
import {Link} from "react-router-dom";


export default function SearchPage(){


    const {register, handleSubmit} = useForm();

    const [search,setSearch] = useState('');

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

    },[search]);

    const submit = obj => {
        setSearch(obj.input);
    };


    return(
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" {...register('input')}/>
                <input type="submit" />
                <br/>
                Names:
                {
                    resName && resName.filter(obj=> obj.name.includes(search)).map(value=>

                        <Link to = {`/Pokemons/${value.name}`}>
                            <br/>

                            {value.name}

                        </Link>).slice(0,10)
                }
                <hr/>
                Abilities:
                {
                        resAbility && resAbility.filter(obj=> obj.name.includes(search)).map(value=>

                        <Link to = {`/Search/${value.name}`}>
                            <br/>

                            {value.name}

                        </Link>).slice(0,10)
                }
                <hr/>
                Types:
                {
                    resType && resType.filter(obj=> obj.name.includes(search)).map(value=>

                        <Link to = {`/Search/Type/${value.name}`}>
                            <br/>

                            {value.name}

                        </Link>).slice(0,10)
                }
                  <hr/>
            </form>

        </div>
    );
}







// {forms && forms.map((poke,index) =><PokemonInfo key={index} poke={poke}/>)}
// {pokemon && pokemon.map((pokemons,index) =><AbilityPokemon key={index} pokemons={pokemons}/>)}
// {pokemonType && pokemonType.map((pokemons,index) =><TypePokemon key={index} pokemons={pokemons}/>)}

// const {search} = useSelector(state => state.search);
// const {ability} = useSelector(state => state.ability);
// const {type} = useSelector(state => state.type);
