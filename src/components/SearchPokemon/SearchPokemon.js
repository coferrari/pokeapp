import React, { useState } from "react";
import { useDispatch } from "react-redux";
import fetchPokemon from "../../redux/actions/index";
import style from "./SearchPokemon.module.css";

// como este componente va a despachar acciones, tenemos que invocar al dispatch

const SearchPokemon = () => {
  const dispatch = useDispatch();
  const [poke, setPoke] = useState("");

  const handleSubmit = () => {
    if (poke) {
      dispatch(fetchPokemon(poke.toLowerCase()));
      setPoke("");
    }
    else alert('Write a Pokemon')
  };

  return (
    <>
      <div className={style.bg}>
        <label>Search:</label>
        <input
          type="text"
          value={poke}
          onChange={(e) => {
            setPoke(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            handleSubmit();
          }}
        >
          Go!
        </button>
      </div>
    </>
  );
};

export default SearchPokemon;
