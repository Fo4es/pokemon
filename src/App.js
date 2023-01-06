import {Route,Routes} from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import SearchPage from "./pages/Search.page";
import PokemonsPage from "./pages/Pokemons.page";
import PokemonInfoPage from "./pages/PokemonInfoPage";
import FormsInfoPage from "./pages/FormsInfoPage";

const App = () =>{
  return(
    <div>
      <Routes>
        <Route path={''} element={<MainLayout/>}>
         <Route path={'Search'} element={<SearchPage/>}/>
         <Route path={'Pokemons'} element={<PokemonsPage/>}/>
            <Route path={'Pokemons/:name'} element={<PokemonInfoPage/>}/>
            <Route path={'Forms/:name'} element={<FormsInfoPage/>}/>
        </Route>

      </Routes>
    </div>
  );
}

export default App;