import {axiosService} from "./axios";
import {urls} from "../constants";
const pokemonServices = {
    getAll:(offset=0)=>axiosService.get(urls.pokemon,{params:{offset}}),
    getOne:(name)=>axiosService.get(urls.pokemon+`${name}`),
    getForms:(name)=>axiosService.get(urls.forms+`${name}`)
}
export {
    pokemonServices
}