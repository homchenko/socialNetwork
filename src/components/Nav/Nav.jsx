import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <NavLink to="/profile" activeClassName={style.active}>Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/dialogs" activeClassName={style.active}>Messages</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/users" activeClassName={style.active}>Users</NavLink>
            </div>
            <div className={style.item}>
                <a href="#">News</a>
            </div>
            <div className={style.item}>
                <a href="#">Music</a>
            </div>
            <div className={style.item}>
                <a href="#">Settings</a>
            </div>
        </nav>
    );
}

export default Nav;