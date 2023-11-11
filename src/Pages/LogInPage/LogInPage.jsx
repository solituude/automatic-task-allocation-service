import React, {useEffect, useState} from "react";
import {BackButton} from "../../UI/BackButton/BackButton";
import s from '../SignUpPage/signUpPage.module.scss';
import NameForm from "../../Components/NameForm/NameForm";
import PasswordForm from "../../Components/PasswordForm/PasswordForm";
import {connect} from "react-redux";
import {setNewLogin, setNewPassword, setNewRole} from "../../redux/actions";
import {NavLink} from "react-router-dom";

const LogInPage = ({login, role, setNewLogin, setNewPassword, setNewRole, isFetching}) => {

    const [currentLogin, setCurrentLogin] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [link, setLink] = useState('');

    // const header = new Headers();
    useEffect(() => {
        console.log(role)
    }, [role])

    const handleSubmit = (e) => {
        // const response = await fetch(`/accounts/current`, {
        //     method: 'GET',
        //     headers: {
        //         'Accept': 'application/json',
        //         Authorization: 'Basic ' + btoa(`${currentLogin}:${currentPassword}`)
        //     },
        // });
        // считаем, что пользователь всегда вводить верный пароль (ПОФИКСИТЬ ПРИ ТОКЕНАХ)
        localStorage.setItem('login', currentLogin);
        localStorage.setItem('password', currentPassword);
        setNewLogin(currentLogin);
        setNewPassword(currentPassword);
        // const data = response.json();
        console.log(currentLogin === 'manager');

        // ЗАМЕНИТЬ КОГДА ПОФИКСЯТ ЗАПРОС ВЫШЕ
        if (currentLogin === 'manager' || currentLogin === 'admin') {
            setNewRole('MANAGER');
            setLink('/managerHomepage')
        } else if (currentLogin === 'employee') {
            setNewRole('EMPLOYEE')
            setLink('/employeeHomepage')
        }
    }

    return (
        <div className={s.content}>
            <BackButton/>
            <span className={s.header__label}>Вход</span>
            <form className={s.form__container}>
                <NameForm value={currentLogin} setValue={setCurrentLogin}/>
                <PasswordForm value={currentPassword} setValue={setCurrentPassword}/>


                    <button className={s.submit__button} type="button" onClick={handleSubmit}>
                        <NavLink to={link}>
                        <span className={s.submit__label}>
                            Войти
                        </span>
                        </NavLink>
                    </button>

            </form>
        </div>
    )
}

const mapStateToProps = (store) => ({
    login: store.main.login,
    role: store.main.role,
    isFetching: store.main.isFetching
})


export default connect(mapStateToProps, {setNewLogin, setNewPassword, setNewRole})(LogInPage);
