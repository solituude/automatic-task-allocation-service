import React from "react";
import s from "../../Pages/SignUpPage/signUpPage.module.scss";

const PasswordForm = ({value, setValue}) => {
    return(
        <div className={s.form__item}>
            <span className={s.input__label}>Пароль</span>
            <div className={s.input__container}>
                <input className={s.input__area} value={value} onChange={(e) => setValue(e.target.value)} type={"password"}/>
            </div>
        </div>
    )
}

export default PasswordForm;