import {useLocation} from "react-router-dom";
import PokemonInfo from "../components/PokemonInfo/PokemonInfo";

export default function PokemonInfoPage(){

    const location = useLocation();

    return(
        <div>
            <PokemonInfo poke={location.state}/>
        </div>
    );
}
