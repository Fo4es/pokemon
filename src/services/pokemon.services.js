import {axiosService} from "./axios";
import {urls} from "../constants";
const pokemonServices = {
    getAll:(offset=0,limit=0)=>axiosService.get(urls.pokemon,{params:{offset,limit}}),
    getOne:(name)=>axiosService.get(urls.pokemon+`${name}`),
    getForms:(name)=>axiosService.get(urls.forms+`${name}`),
    getAbility:(name)=>axiosService.get(urls.ability+`${name}`),
    getAllAbility:(offset,limit)=>axiosService.get(urls.ability,{params:{offset,limit}}),
    getType:(name)=>axiosService.get(urls.type+`${name}`),
    getAllType:(offset,limit)=>axiosService.get(urls.type,{params:{offset,limit}})
}
export {
    pokemonServices
}