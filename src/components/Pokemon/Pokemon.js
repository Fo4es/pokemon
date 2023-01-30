import {Link} from "react-router-dom";

import {picture} from "../../constants";

export default function Pokemon({pokemons}){
      const {name,url} =pokemons;

      const id = url.slice(34).replace("/","");

    return(
        <div  className='pokemonsCard'>
        <Link to ={`/Pokemons/${name}`} state={pokemons}>
        <div className='pokemonCard'>
            <div className='picture'>
                <img alt={`picture`} src={picture+id+`.png`}/>
            </div>
            <div className='text'>
                {name}
            </div>
        </div>
        </Link>
        </div>
    );
}










