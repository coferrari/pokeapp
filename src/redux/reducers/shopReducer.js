import { 
    BUY_POKEMON, 
    RETURN_POKEMON 
} from '../actions/types';

const initialState = {
    pokemon: 10
}

const gameShop = (state = initialState, { type, payload }) => {
    switch (type) {
        case BUY_POKEMON:
            {
                return {
                    ...state,
                    pokemon: state.pokemon - payload
                }
            }
        case RETURN_POKEMON: {
            return {
                ...state,
                pokemon: state.pokemon + payload
            }
        }
        default: {
            return state;
        }
    }
}

export default gameShop;