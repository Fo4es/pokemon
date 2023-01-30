import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {pokemonActions} from "../../redux";
import {useParams} from "react-router-dom";

import Forms from "../Forms/Forms";
import Abilites from "../Ability/Abilites";
import Stats from "../Stats/Stats";
import Types from "../Type/Types";
import {picture} from "../../constants";
import '../../css/css.css'

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
            <div className='picture'>

            <img alt={`picture`} src={picture+id+`.png`}/>
            <br/>
            </div>
            <div className='text'>
            {name}
            <div>Ability:</div>
            {abilities&&abilities.map(ability=><Abilites abilites={ability}/>)}
            <div>Stats:</div>
            {stats&&stats.map(stats=><Stats stats={stats}/>)}
            <div>Type:</div>
            {types&&types.map(types=><Types types={types}/>)}
            </div>
            <hr/>
            <div className='forms'>
            {forms&&forms.map(forms=><Forms forms={forms} id={id}/>)}
            </div>
        </div>
    );
}