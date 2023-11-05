import React from "react";
import s from './logInButton.module.scss';
import {NavLink} from "react-router-dom";

export const LogInButton = () => {
    return (
        <NavLink to='/login'>
            <button className={s.container}>
                <span className={s.label}>
                    Войти
                </span>
            </button>
        </NavLink>
    )
}


