import React from "react";
import {useNavigate} from "react-router-dom";
import backIcon from '../../assets/loginPage/back.svg';
import s from './backButton.module.scss';

export const BackButton = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    }

    return(
        <button onClick={handleBack} className={s.container}>
            <img src={backIcon} alt={'<-'}/>
        </button>
    )
}
