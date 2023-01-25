import {Link} from "react-router-dom";

import {picture} from "../../constants";

export default function Pokemon({pokemons}){
      const {name,url} =pokemons;

      const id = url.slice(34).replace("/","");

    return(
        <Link to ={`/Pokemons/${name}`} state={pokemons}>
        <div>
            {name}
            <img alt={`picture`} src={picture+id+`.png`}/>
        </div>
        </Link>
    );
}










