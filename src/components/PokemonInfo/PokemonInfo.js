import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import style from "./PokemonInfo.module.css";

const PokemonInfo = () => {
  const pokemon = useSelector((state) => state.search.pokemon[0]);
  const history = useHistory();

  return (
    <div>
      <h3>{pokemon.name}</h3>
      <img src={pokemon.sprites.other.dream_world.front_default} />
      <p>Experience: {pokemon.base_experience}</p>
      <div>
        <p>weight: {pokemon.weight}</p>
        <p>height: {pokemon.height}</p>
        <p>abilities</p>
        {pokemon.abilities?.map((a) => (
          <div>
            <p>{a.ability.name}</p>
          </div>
        ))}
        <p>type:</p>
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

      <p>base stats:</p>
      {pokemon.stats?.map((stat) => (
        <div key={stat.name}>
          <h5>{stat.stat.name}</h5>
          <p>{stat.base_stat}</p>
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
      ))}

      <button onClick={() => history.goBack()}>go back</button>
    </div>
  );
};

export default PokemonInfo;
