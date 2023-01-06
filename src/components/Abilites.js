export default function Abilites({abilites}){



    const {ability,is_hidden,slot} = abilites;


    return(
        <div>
            {ability.name}
        </div>
    );
}