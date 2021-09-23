import React from 'react';
import { useDispatch } from 'react-redux';
import { buyPokemon, returnPokemon } from '../../redux/actions/index';

const BuyPokemon = () => {

    const dispatch = useDispatch();
    return (
        <>
        <button onClick={()=> {dispatch(buyPokemon(1))}}>Buy Pokemon</button>
        <button onClick={()=> {dispatch(returnPokemon(1))}}>Return Pokemon</button>
        </>
    );
}

export default BuyPokemon;