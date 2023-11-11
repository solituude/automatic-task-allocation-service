import React, {useCallback, useEffect} from "react";
import logo from '../../assets/startPage/scb_logo_RGB_NEW_main 1.svg';
import s from './header.module.scss';
import userIcon from '../../assets/homepage/userIcon.svg';
import {connect} from "react-redux";
import {requestAccountsInfo} from "../../redux/actions";

const header = new Headers();
const loginLS = localStorage.getItem('login');
header.append('Authorization', 'Basic ' + btoa('admin:qwerty12'));
header.append('Accept', 'application/json');
const Header = ({fullName, role, requestAccountsInfo}) => {

    const fetchDataCallback = useCallback(async (header, loginLS) => {
        try {
            await requestAccountsInfo(header, loginLS);
            // Делайте что-то с результатом
        } catch (error) {
            console.error('Ошибка:', error.message);
        }
    }, [requestAccountsInfo]);

    useEffect(() => {
        fetchDataCallback(header, loginLS);
    }, [fetchDataCallback]);

    return(
        <div className={s.container}>
            <div className={s.logo__image}>
                <img src={logo} alt={"logo"} height={32}/>
            </div>
            <div className={s.user__container}>
                <div className={s.info__container}>
                    <span className={s.info__name}>{fullName}</span>
                    <span className={s.info__role}>{role}</span>
                </div>
                <img src={userIcon} alt={'0'} height={29}/>
            </div>
        </div>
    )
}

const mapStateToProps = (store) => ({
    fullName: store.main.fullName,
    role: store.main.role,
})

export default connect(mapStateToProps, {requestAccountsInfo})(Header);