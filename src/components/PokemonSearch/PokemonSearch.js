import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addPokemonFavorite,
  removePokemonFavorite,
} from "../../redux/actions/index";
import { Link } from "react-router-dom";
import style from "./PokemonSearch.module.css";
import pokeball from "../../img/pokeball.png";

const PokemonSearch = () => {
  const state = useSelector((state) => state.search);
  const dispatch = useDispatch();

  return (
    <div className={style.bg}>
      <div className={style.card}>
        {state.loading && <div>Searching...</div>}
        <div>
          {state.pokemon.length >= 1 &&
            !state.pokeFavorites.find(
              (poke) => poke.id === state.pokemon[0].id
            ) && (
              <button
                onClick={() =>
                  dispatch(
                    addPokemonFavorite({
                      id: state.pokemon[0].id,
                      name: state.pokemon[0].name,
                      img: state.pokemon[0].sprites.other.dream_world
                        .front_default,
                    })
                  )
                }
              >
                Add to fav
              </button>
            )}
          {state.pokemon.length >= 1 &&
            state.pokeFavorites.find(
              (poke) => poke.id === state.pokemon[0].id
            ) && (
              <button
                onClick={() =>
                  dispatch(removePokemonFavorite(state.pokemon[0].id))
                }
              >
                Remove from fav
              </button>
            )}
          {state.pokemon.length >= 1 && (
            <div className={style.bg}>
              <div className={style.bgcard}>
                <img
                  src={state.pokemon[0].sprites.other.dream_world.front_default}
                  alt="Pokemon"
                />
              </div>
              <div className={style.column}>
                <h3 className={style.titles}>{state.pokemon[0].name}</h3>
                {state.pokemon.length >= 1 &&
                  state.pokemon[0].types?.map((t) => (
                    <div className={style.poison}>{t.type.name}</div>
                  ))}

                <Link to={`/pokemon/${state.pokemon[0].id}`}>
                  <button>view details</button>
                </Link>
              </div>

            </div>
          )}
        </div>
        {state.error && <span>{state.error}</span>}
      </div>
    </div>
  );
};

export default PokemonSearch;
