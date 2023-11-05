import React, {useState} from "react";
import {BackButton} from "../../UI/BackButton/BackButton";
import s from './signUpPage.module.scss';
import NameForm from "../../Components/NameForm/NameForm";
import AddressForm from "../../Components/AddressForm/AddressForm";
import PasswordForm from "../../Components/PasswordForm/PasswordForm";
import RoleChoice from "../../UI/RoleChoice/RoleChoice";

const SignUpPage = () => {
    const [role, setRole] = useState('manager');
    return (
        <div className={s.content}>
            <BackButton/>
            <span className={s.header__label}>Регистрация</span>
            <RoleChoice role={role} setRole={setRole}/>
            <form className={s.form__container}>
                <NameForm/>
                <AddressForm/>
                <PasswordForm/>
                <button type={"submit"} className={s.submit__button}>
                    <span className={s.submit__label}>
                        Регистрация
                    </span>
                </button>
            </form>
        </div>
    )
}
export default SignUpPage;
