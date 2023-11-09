import React, {useState} from "react";
import Header from "../../UI/Header/Header";
import d from "../../Components/ManagerOptions/managerOptions.module.scss";
import s from './pointsInfoPage.module.scss';
import leftIcon from '../../assets/homepage/left.svg';
import infoIcon from "../../assets/homepage/infoIcon.svg";
import {useNavigate} from "react-router-dom";
import PointsTable from "../../Components/PointsTable/PointsTable";
import NewPointModal from "../../Components/Modals/NewPointModal/NewPointModal";

const PointsInfoPage = () => {
    const navigate = useNavigate();
    const [showNewPointModal, setShowNewPointModal] = useState(false);

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
            <button className={s.add__button} onClick={() => setShowNewPointModal(true)}>
                Добавить агентскую точку
            </button>
            <PointsTable/>
            <NewPointModal show={showNewPointModal} handleClose={() => setShowNewPointModal(false)}/>
        </div>
    )
}

export default PointsInfoPage;