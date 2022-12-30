
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {pokemonActions} from "../../redux";



export default function Pokemon({pokemon}){
      const {name,url} =pokemon;

      const {pokemons} = useSelector(state => state.pokemon );




    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(pokemonActions.getOne({name:name}))
    },[])

    return(
        <div>

            <div>{name}</div>


        </div>
    );
}





{/*{abilities && abilities.map(one=><Picture key={one.id} one={one}/>)}*/}
//const id = url.slice(34).replace("/","");

// const {abilities} = one;

{/*<img alt={`picture`} src={picture+id+`.png`}/>*/}
