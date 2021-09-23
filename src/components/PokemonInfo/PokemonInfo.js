import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

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
        {pokemon.types?.map((type) => (
          <div>
            <h5>{type.type.name}</h5>
          </div>
        ))}
      </div>

      <p>base stats:</p>
      {pokemon.stats?.map((stat) => (
        <div key={stat.name}>
          <h5>{stat.stat.name}</h5>
          <p>{stat.base_stat}</p>
          {stat.stat.name === 'hp' && <input type='range' min="1" max="255" value={stat.base_stat}></input>}
          {stat.stat.name === 'attack' && <input type='range' min="5" max="190" value={stat.base_stat}></input>}
          {stat.stat.name === 'defense' && <input type='range' min="5" max="250" value={stat.base_stat}></input>}
          {stat.stat.name === 'special-attack' && <input type='range' min="10" max="194" value={stat.base_stat}></input>}
          {stat.stat.name === 'special-defense' && <input type='range' min="20" max="250" value={stat.base_stat}></input>}
          {stat.stat.name === 'speed' && <input type='range' min="5" max="180" value={stat.base_stat}></input>}
          
        </div>
      ))}

      <button onClick={() => history.goBack()}>go back</button>
    </div>
  );
};

export default PokemonInfo;
