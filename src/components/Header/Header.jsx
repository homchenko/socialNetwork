import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css';

const Header = (props) => {
    return (
        <header className={style.header}>
            <div className="headerLine">
                <div>
                    <img src="https://vgdesign.by/wp-content/uploads/2017/06/%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF-%D0%BF%D1%82%D0%B8%D1%86%D0%B0-19.jpg" />
                </div>
                <div>
                    <span>MyFirstSocialNetwork</span>
                    </div>
            </div>
            <div className={style.loginBlock}>
                {props.isAuth
                    ? <div>{props.login } 
                    <button onClick={props.logout}>Logout</button>
                    </div>
                    
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;