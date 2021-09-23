import React from 'react';
import { useSelector } from 'react-redux';

const StockPokemon = () => {

    const gameShop = useSelector((state) => state.gameShop)

    return ( 
        <>
        Cantidad:{gameShop.pokemon}
        </>
    );
}

export default StockPokemon;