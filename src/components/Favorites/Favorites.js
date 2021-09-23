import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
    removePokemonFavorite,
  } from "../../redux/actions/index";

const Favorites = () => {
  const favs = useSelector((state) => state.search.pokeFavorites);
  const dispatch = useDispatch();

  return (
    <div>
      {favs?.map((fav) => (
        <div>
          <h5>{fav.name}</h5>
          <img src={fav.img} />
          <button onClick={() => dispatch(removePokemonFavorite(fav.id))}>
            Remove from fav
          </button>
        </div>
      ))}
      {!favs.length && <div>No favs yet</div>}
    </div>
  );
};

export default Favorites;
