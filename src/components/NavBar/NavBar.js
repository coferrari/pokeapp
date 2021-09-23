import React from 'react';
import Logo from '../../img/pokelogo.svg';
import { Link } from 'react-router-dom';
import style from './NavBar.module.css'

const NavBar = () => {
    return (
        <nav className={style.nav}>
            <Link to='/' className={style.links}>
                <img src={Logo} width="200" height="200" alt='img not found' />
            </Link>
            <Link to='/about' className={style.links}>About</Link>
            <Link to='/search' className={style.links}>Search</Link>
            <Link to='/favorites' className={style.links}>Favorites</Link>
            <Link to='/shop' className={style.links}>Shop</Link>
        </nav>
    );
}

export default NavBar;