import React from "react";
import s from "../../Pages/SignUpPage/signUpPage.module.scss";

const NameForm = () => {
    return (
        <div className={s.form__item}>
            <span className={s.input__label}>Ваше имя</span>
            <div className={s.input__container}>
                <input className={s.input__area} type="text"/>
            </div>
        </div>
    )
}

export default NameForm;