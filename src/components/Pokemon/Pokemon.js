
import {picture} from "../../constants";
import {Link} from "react-router-dom";


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








//     console.log(abilities);
// const {abilities} = one;


