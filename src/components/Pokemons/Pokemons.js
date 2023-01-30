import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {pokemonActions} from "../../redux";
import {useSearchParams} from "react-router-dom";

import Pokemon from "../Pokemon/Pokemon";
import '../../css/css.css';

export default function Pokemons(){
    const {pokemons} = useSelector(state => state.pokemons);

    const {results} = pokemons;
    const [query, setQuery] = useSearchParams({offset:'0'});

    const dispatch = useDispatch();
    useEffect(()=>{
           dispatch(pokemonActions.getAll({offset:query.get('offset')}))
    },[query])

    const prevPage = () => {
        const offset = +query.get('offset')-20;
        setQuery({offset:`${offset}`});
    };

    const nextPage = () => {
        const offset = +query.get('offset')+20;
        setQuery({offset:`${offset}`});
    };

    return(

        <div >
            <div className='buttons'>
                <button  onClick={prevPage}>Prev</button>
                <button  onClick={nextPage} >Next</button>
            </div>
            <div className='pokemons'>
                {results && results.map(pokemons=><Pokemon key={pokemons.name} pokemons={pokemons}/>)}
            </div>
        </div>
    );
}