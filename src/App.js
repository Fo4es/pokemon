import {Route,Routes} from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import SearchPage from "./pages/Search.page";
import PokemonsPage from "./pages/Pokemons.page";

const App = () =>{
  return(
    <div>
      <Routes>
        <Route path={''} element={<MainLayout/>}>
         <Route path={'Search'} element={<SearchPage/>}/>
         <Route path={'Pokemons'} element={<PokemonsPage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;