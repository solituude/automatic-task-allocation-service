import React from "react";
import logo from '../../assets/startPage/scb_logo_RGB_NEW_main 1.svg';
import s from './header.module.scss';
import userIcon from '../../assets/homepage/userIcon.svg';
import {connect} from "react-redux";

const Header = ({fullName, role}) => {
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
    fullName: store.manager.fullName,
    role: store.main.role,
})

export default connect(mapStateToProps)(Header);