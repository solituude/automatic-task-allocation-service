import React, {useState} from "react";
import {BackButton} from "../../UI/BackButton/BackButton";
import s from '../SignUpPage/signUpPage.module.scss';
import NameForm from "../../Components/NameForm/NameForm";
import PasswordForm from "../../Components/PasswordForm/PasswordForm";
import {connect} from "react-redux";
import {requestAccountsInfo, setNewLogin, setNewPassword, setNewRole} from "../../redux/actions";

const LogInPage = ({role, setNewLogin, setNewPassword, requestAccountsInfo}) => {

    const [currentLogin, setCurrentLogin] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const header = new Headers();
    header.append('Authorization', 'Basic ' + btoa('admin:qwerty12'));
    header.append('Accept', 'application/json');

    // const header = new Headers();
    // useEffect(() => {
    //     console.log(role)
    // }, [role])

    const handleSubmit = () => {
        requestAccountsInfo(header, currentLogin)
        // считаем, что пользователь всегда вводить верный пароль (ПОФИКСИТЬ ПРИ ТОКЕНАХ)
        localStorage.setItem('login', currentLogin);
        localStorage.setItem('password', currentPassword);
        setNewLogin(currentLogin);
        setNewPassword(currentPassword);


        // ЗАМЕНИТЬ КОГДА ПОФИКСЯТ ЗАПРОС ВЫШЕ
        if (currentLogin === 'manager' || role === 'ADMIN') {
            // setLink('/managerHomepage')
            window.location.href = '/managerHomepage';
        } else if (role === 'EMPLOYEE') {
            window.location.href = '/employeeHomepage';
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
                            <span className={s.submit__label}>
                                Войти
                            </span>
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


export default connect(mapStateToProps, {setNewLogin, setNewPassword, setNewRole, requestAccountsInfo})(LogInPage);
