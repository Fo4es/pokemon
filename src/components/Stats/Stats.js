export default function Stats({stats}){
    const {base_stat,stat,effort} = stats;
    return(
        <div>
            {stat.name} - {base_stat}
            <br/>
            effort {effort}
        </div>
    );
}