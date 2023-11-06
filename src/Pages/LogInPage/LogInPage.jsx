import React from "react";
import {BackButton} from "../../UI/BackButton/BackButton";
import s from '../SignUpPage/signUpPage.module.scss';
import NameForm from "../../Components/NameForm/NameForm";
import PasswordForm from "../../Components/PasswordForm/PasswordForm";

const LogInPage = () => {
    return (
        <div className={s.content}>
            <BackButton/>
            <span className={s.header__label}>Вход</span>
            <form className={s.form__container}>
                <NameForm/>
                <PasswordForm/>
                <button type={"submit"} className={s.submit__button}>
                    <span className={s.submit__label}>
                        Войти
                    </span>
                </button>
            </form>
        </div>
    )
}
export default LogInPage;
