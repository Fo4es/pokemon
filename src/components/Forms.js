import {Link} from "react-router-dom";

export default function Forms({forms}){
   const {name} = forms;

    return(
        <div>
            <Link to={`/Forms/${name}`}><button>{name} form</button></Link>
        </div>
    );
}