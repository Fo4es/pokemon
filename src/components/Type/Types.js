export default function Types({types}){
    const {slot,type} = types
    return(
        <div>
           slot {slot}
            <br/>
           name {type.name}
        </div>
    );
}
