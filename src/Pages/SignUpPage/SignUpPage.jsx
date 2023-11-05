import React, {useState} from "react";
import {BackButton} from "../../UI/BackButton/BackButton";
import s from './signUpPage.module.scss';
import roleManagerIcon from '../../assets/signUpPage/roleManager.svg';
import roleEmployeeIcon from '../../assets/signUpPage/roleEmployee.svg';

const SignUpPage = () => {
    const [role, setRole] = useState('manager');

    return (
        <div className={s.content}>
            <BackButton/>
            <span className={s.header__label}>Регистрация</span>
            <div className={s.role__container}>
                <div className={s.role__item}>
                    <button onClick={() => setRole('manager')}
                        className={role === 'manager' ? s.nonDecoration__button_active : s.nonDecoration__button}>
                        <img src={roleManagerIcon} alt={'man'}/>
                    </button>
                    <span className={s.role__label}>Менеджер</span>
                </div>

                <div className={s.role__item}>
                    <button onClick={() => setRole('employee')}
                        className={role === 'employee' ? s.nonDecoration__button_active : s.nonDecoration__button}>
                        <img src={roleEmployeeIcon} alt={'empl'}/>
                    </button>
                    <span className={s.role__label}>Сотрудник</span>
                </div>
            </div>

            <form className={s.form__container}>
                <div className={s.form__item}>
                    <span className={s.input__label}>Ваше имя</span>
                    <div className={s.input__container}>
                        <input type="text"/>
                    </div>
                </div>

                <div className={s.form__item}>
                    <span className={s.input__label}>Адрес отдела</span>
                    <div className={s.input__container}>
                        <input type="text"/>
                    </div>
                </div>

                <div className={s.form__item}>
                    <span className={s.input__label}>Пароль</span>
                    <div className={s.input__container}>
                        <input type={"password"}/>
                    </div>
                </div>
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
