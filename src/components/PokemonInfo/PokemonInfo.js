import Forms from "../Forms";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useLocation} from "react-router-dom";
import {pokemonActions} from "../../redux";
import Abilites from "../Abilites";
import Stats from "../Stats";
import Types from "../Types";
import {picture} from "../../constants";

export default function PokemonInfo({poke}){

    const {name} = poke;


    const {pokemon} = useSelector(state => state.pokemon);
    const {forms,abilities,stats,types,sprites,id} = pokemon;




    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(pokemonActions.getOne({name:name}))
    },[])

    return(
        <div>
            <hr/>
            <img alt={`picture`} src={picture+id+`.png`}/>
            <br/>
            {name}

            <div>Ability:</div>
            {abilities&&abilities.map(ability=><Abilites abilites={ability}/>)}
            <div>Stats:</div>
            {stats&&stats.map(stats=><Stats stats={stats}/>)}
            <div>Type:</div>
            {types&&types.map(types=><Types types={types}/>)}
            <hr/>
            {forms&&forms.map(forms=><Forms forms={forms} id={id}/>)}
        </div>
    );
}