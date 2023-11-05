import React from "react";
import s from './signUpButton.module.scss';
import {NavLink} from "react-router-dom";
export const SignUpButton = () => {
    return(
        <NavLink to='/signup'>
            <button className={s.container}>
                <span className={s.label}>Зарегистрироваться </span>
            </button>
        </NavLink>
    )
}

