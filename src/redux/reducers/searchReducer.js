import {
  FETCH_POKEMON_REQUEST,
  FETCH_POKEMON_SUCCESS,
  FETCH_POKEMON_FAILURE,
  ADD_POKEMON_FAVORITE,
  REMOVE_POKEMON_FAVORITE,
  CLEAR_STATE,
} from "../actions/types.js";

const initialState = {
  loading: false,
  pokemon: [],
  error: "",
  pokeFavorites: [],
  pokeDetails: "",
};

const search = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_POKEMON_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case FETCH_POKEMON_SUCCESS:
      return {
        ...state,
        loading: false,
        pokemon: payload,
        error: "",
      };
    case FETCH_POKEMON_FAILURE:
      return {
        ...state,
        loading: false,
        pokemon: [],
        error: payload,
      };
    case CLEAR_STATE:
      return {
        ...state,
        pokemon: [],
      };
    case ADD_POKEMON_FAVORITE:
      return {
        ...state,
        pokeFavorites: [...state.pokeFavorites, payload],
      };
    case REMOVE_POKEMON_FAVORITE:
      console.log(payload);
      return {
        ...state,
        pokeFavorites: state.pokeFavorites.filter(
          (poke) => poke.id !== payload
        ),
      };
    default:
      return state;
  }
};

export default search;
