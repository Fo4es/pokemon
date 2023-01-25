import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {pokemonActions} from "../redux";
import {picture2} from "../constants";

export default function FormsInfoPage(){

    const {name} = useParams();
    const {forms} = useSelector(state => state.forms);
    const {is_mega,is_battle_only,id} = forms;

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(pokemonActions.getForms({name:name}))
    },[]);

    return(
        <div>
            <img src={picture2+id+`.png`} alt="p"/>
            <br/>
            {`Is mega - ${is_mega}`}
            <br/>
            {`Is battle - ${is_battle_only}`}
        </div>
    );
}