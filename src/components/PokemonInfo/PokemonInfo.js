import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import style from "./PokemonInfo.module.css";

const PokemonInfo = () => {
  const pokemon = useSelector((state) => state.search.pokemon[0]);
  const history = useHistory();

  return (
    <div className={style.background}>
      <div className={style.card}>
        <img
          src={pokemon.sprites.other.dream_world.front_default}
          className={style.imgpoke}
        />
        <div className={style.details}> 
        <div className={style.details}>
          <p className={style.textspan}>{pokemon.order}</p>
          <h3 className={style.title}>{pokemon.name}</h3>
          <p className={style.text}>
            Experience:{" "}
            <span className={style.textspan}>{pokemon.base_experience}</span>
          </p>
          <div className={style.types}>
            {pokemon.types?.map((t) =>
              t.type.name === "normal" ? (
                <div className={style.poison}>{t.type.name}</div>
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
                <div className={style.fighting}>{t.type.name}</div>
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
            )}
          </div>
        </div>
        <div className={style.containerstatsandbreeding}>
          <div className={style.breeding}>
            <h5 className={style.subtitles}>Breeding</h5>
            <p className={style.text}>
              Weight: <span className={style.textspan}>{pokemon.weight}</span>
            </p>
            <p className={style.text}>
              Height: <span className={style.textspan}>{pokemon.height}</span>
            </p>
            <p className={style.text}>Abilities:</p>
            {pokemon.abilities?.map((a) => (
              <li className={style.textspan}>{a.ability.name}</li>
            ))}
          </div>
          <div>
            <h5 className={style.subtitles}>Base stats:</h5>
            {pokemon.stats?.map((stat) => (
              <div key={stat.name} className={style.statscontainer}>
                <div className={style.stats}>
                  <h5 className={style.text}>{stat.stat.name}</h5>
                  <p className={style.textspan}>{stat.base_stat}</p>
                  {stat.stat.name === "hp" && (
                    <input
                      type="range"
                      min="1"
                      max="255"
                      value={stat.base_stat}
                    ></input>
                  )}
                  {stat.stat.name === "attack" && (
                    <input
                      type="range"
                      min="5"
                      max="190"
                      value={stat.base_stat}
                    ></input>
                  )}
                  {stat.stat.name === "defense" && (
                    <input
                      type="range"
                      min="5"
                      max="250"
                      value={stat.base_stat}
                    ></input>
                  )}
                  {stat.stat.name === "special-attack" && (
                    <input
                      type="range"
                      min="10"
                      max="194"
                      value={stat.base_stat}
                    ></input>
                  )}
                  {stat.stat.name === "special-defense" && (
                    <input
                      type="range"
                      min="20"
                      max="250"
                      value={stat.base_stat}
                    ></input>
                  )}
                  {stat.stat.name === "speed" && (
                    <input
                      type="range"
                      min="5"
                      max="180"
                      value={stat.base_stat}
                    ></input>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
      <button onClick={() => history.goBack()}>go back</button>
    </div>
  );
};

export default PokemonInfo;
