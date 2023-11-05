import React from "react";
import s from "../../Pages/SignUpPage/signUpPage.module.scss";

const AddressForm = () => {
    return(
        <div className={s.form__item}>
            <span className={s.input__label}>Адрес отдела</span>
            <div className={s.input__container}>
                <input type="text"/>
            </div>
        </div>
    )
}

export default AddressForm;
