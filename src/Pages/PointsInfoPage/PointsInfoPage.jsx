import React from "react";
import Header from "../../UI/Header/Header";
import d from "../../Components/ManagerOptions/managerOptions.module.scss";
import s from './pointsInfoPage.module.scss';
import leftIcon from '../../assets/homepage/left.svg';
import infoIcon from "../../assets/homepage/infoIcon.svg";
import {useNavigate} from "react-router-dom";
import PointsTable from "../../Components/PointsTable/PointsTable";

const PointsInfoPage = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    }

    return(
        <div>
            <Header/>
            <button onClick={handleBack} className={s.back__button}>
                <img src={leftIcon} alt={"<"}/>
                <span className={d.option__label}>Информация по точкам</span>
                <img src={infoIcon} alt={"i"}/>
            </button>
            <PointsTable/>
        </div>
    )
}

export default PointsInfoPage;