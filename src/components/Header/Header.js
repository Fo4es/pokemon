import {Link} from "react-router-dom";


export default function Header(){

    return(
        <div className='headers'>
            <div className='header' ><Link to={'Search'}>Search</Link></div>
            <div className='header'><Link to={'Pokemons'}>Pokemon</Link></div>
        </div>
    );
}