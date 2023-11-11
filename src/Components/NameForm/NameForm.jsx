import React from "react";
import s from "../../Pages/SignUpPage/signUpPage.module.scss";

const NameForm = ({value, setValue}) => {
    return (
        <div className={s.form__item}>
            <span className={s.input__label}>Логин</span>
            <div className={s.input__container}>
                <input className={s.input__area} value={value} onChange={(e)  => setValue(e.target.value)} type="text"/>
            </div>
        </div>
    )
}

export default NameForm;