import {Link} from "react-router-dom";
import {useState} from "react";
import {useForm} from "react-hook-form";




export default function Form({resType,resName,resAbility}){
    const [search,setSearch] = useState('');

    const {register, handleSubmit} = useForm();

    const submit = obj => {
        setSearch(obj.input);
    };

    return(
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" {...register('input')}/>
                <input type="submit" />
                <br/>
                Names:
                {
                    resName && resName.filter(obj=> obj.name.includes(search)).map(value=>

                        <Link to = {`/Pokemons/${value.name}`}>
                            <br/>

                            {value.name}

                        </Link>).slice(0,10)
                }
                <hr/>
                Abilities:
                {
                    resAbility && resAbility.filter(obj=> obj.name.includes(search)).map(value=>

                        <Link to = {`/Search/${value.name}`}>
                            <br/>

                            {value.name}

                        </Link>).slice(0,10)
                }
                <hr/>
                Types:
                {
                    resType && resType.filter(obj=> obj.name.includes(search)).map(value=>

                        <Link to = {`/Search/Type/${value.name}`}>
                            <br/>

                            {value.name}

                        </Link>).slice(0,10)
                }
                <hr/>
            </form>

        </div>
    );
}
