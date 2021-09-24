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
                  state.pokemon[0].types?.map((t) =>
                  <div className={style.types}>{
                    t.type.name === "normal" ? (
                      <div className={style.normal}>{t.type.name}</div>
                    ) : t.type.name === "fighting" ? (
                      <div className={style.fighting}>{t.type.name}</div>
                    ) : t.type.name === "flying" ? (
                      <div className={style.flying}>{t.type.name}</div>
                    ) : t.type.name === "poison" ? (
                      <div className={style.poison}>{t.type.name}</div>
                    ) : t.type.name === "ground" ? (
                      <div className={style.ground}>{t.type.name}</div>
                    ) : t.type.name === "rock" ? (
                      <div className={style.rock}>{t.type.name}</div>
                    ) : t.type.name === "bug" ? (
                      <div className={style.bug}>{t.type.name}</div>
                    ) : t.type.name === "ghost" ? (
                      <div className={style.ghost}>{t.type.name}</div>
                    ) : t.type.name === "steel" ? (
                      <div className={style.steel}>{t.type.name}</div>
                    ) : t.type.name === "fire" ? (
                      <div className={style.fire}>{t.type.name}</div>
                    ) : t.type.name === "water" ? (
                      <div className={style.water}>{t.type.name}</div>
                    ) : t.type.name === "grass" ? (
                      <div className={style.grass}>{t.type.name}</div>
                    ) : t.type.name === "electric" ? (
                      <div className={style.electric}>{t.type.name}</div>
                    ) : t.type.name === "psychic" ? (
                      <div className={style.psychic}>{t.type.name}</div>
                    ) : t.type.name === "ice" ? (
                      <div className={style.ice}>{t.type.name}</div>
                    ) : t.type.name === "dragon" ? (
                      <div className={style.dragon}>{t.type.name}</div>
                    ) : t.type.name === "dark" ? (
                      <div className={style.dark}>{t.type.name}</div>
                    ) : t.type.name === "fairy" ? (
                      <div className={style.fairy}>{t.type.name}</div>
                    ) : null
                  }</div>
                  )}

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
