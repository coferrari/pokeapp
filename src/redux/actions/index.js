import Axios from 'axios';

import {
    BUY_POKEMON,
    RETURN_POKEMON,
    FETCH_POKEMON_REQUEST,
    FETCH_POKEMON_SUCCESS,
    FETCH_POKEMON_FAILURE,
    ADD_POKEMON_FAVORITE,
    REMOVE_POKEMON_FAVORITE,
    GET_POKE_INFO,
    CLEAR_STATE
} from './types';

export const buyPokemon = (quantity) => {
    return {
        type: BUY_POKEMON,
        payload: quantity
    }
}

export const returnPokemon = (quantity) => {
    return {
        type: RETURN_POKEMON,
        payload: quantity
    }
}

export const fetchPokemonRequest = () => {
    return {
        type: FETCH_POKEMON_REQUEST
    }
}

export const fetchPokemonSuccess = (pokemon) => {
    return {
        type: FETCH_POKEMON_SUCCESS,
        payload: pokemon
    }
}

export const fetchPokemonFailure = (error) => {
    return {
        type: FETCH_POKEMON_FAILURE,
        payload: error
    }
}

export const addPokemonFavorite = (id) => {
    return {
        type: ADD_POKEMON_FAVORITE,
        payload: id
    }
}

export const removePokemonFavorite = (id) => {
    return {
        type: REMOVE_POKEMON_FAVORITE,
        payload: id
    }
}

export const clearState = () => {
    return {
        type: CLEAR_STATE
    }
}

// con este value vamos a hacer la peticion a la API
// internamente va a retornar una funcion, y eso gracias a thunk va a enviar el dispatch

const fetchPokemon = (value) => {
    return (dispatch) => {
        dispatch(fetchPokemonRequest())
        dispatch(clearState())
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${value}`)
            .then(response => {
                dispatch(fetchPokemonSuccess([response.data]))
            })
            .catch(error => {
                dispatch(fetchPokemonFailure('Pokemon not found'))
            })
    }
}

export default fetchPokemon;