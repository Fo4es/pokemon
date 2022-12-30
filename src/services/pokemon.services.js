import {axiosService} from "./axios";
import {urls} from "../constants";
const pokemonServices = {
    getAll:()=>axiosService.get(urls.pokemon),
    getOne:(name)=>axiosService.get(urls.pokemon+`${name}`)
}
export {
    pokemonServices
}