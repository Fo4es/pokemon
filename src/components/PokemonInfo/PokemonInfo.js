import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {pokemonActions} from "../../redux";
import {useParams} from "react-router-dom";

import Forms from "../Forms";
import Abilites from "../Abilites";
import Stats from "../Stats";
import Types from "../Types";
import {picture} from "../../constants";

export default function PokemonInfo(){

    const {name} = useParams();
    const {pokemon} = useSelector(state => state.pokemon);
    const {forms,abilities,stats,types,id} = pokemon;

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