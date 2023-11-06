import React from "react";
import s from "../../Pages/SignUpPage/signUpPage.module.scss";

const PasswordForm = () => {
    return(
        <div className={s.form__item}>
            <span className={s.input__label}>Пароль</span>
            <div className={s.input__container}>
                <input type={"password"}/>
            </div>
        </div>
    )
}

export default PasswordForm;