import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import StockPokemon from "./components/StockPokemon/StockPokemon";
import BuyPokemon from "./components/BuyPokemon/BuyPokemon";
import SearchPokemon from "./components/SearchPokemon/SearchPokemon";
// import PokemonDetail from './components/PokemonDetail/PokemonDetail';
import NavBar from "./components/NavBar/NavBar";
import Welcome from "./components/Welcome/Welcome";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";
import Profile from "./components/Profile/Profile";
import PokemonDetail from "./components/PokemonSearch/PokemonSearch";
import PokemonInfo from "./components/PokemonInfo/PokemonInfo";
import About from "./components/About/About";
import Favorites from "./components/Favorites/Favorites";
import style from "./App.module.css"

function App() {
  const isAuthenticated = useAuth0();

  return (
    <div className={style.background}>
      <Switch>
        <Route exact path="/about">
          <NavBar />
          <About />
        </Route>
        <Route exact path="/search">
          <NavBar />
          <SearchPokemon />
          <PokemonDetail />
        </Route>
        <Route exact path="/shop">
          <NavBar />
          <StockPokemon />
          <BuyPokemon />
        </Route>
        <Route exact path="/favorites">
          <NavBar />
          <Favorites />
        </Route>
        <Route path='/home'>
        <NavBar />
        {/*   
          <Login />
          <Profile />
          <Logout /> */}
        </Route>
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route path="/pokemon/:id">
          <PokemonInfo />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
