import React, {useCallback, useEffect, useState} from "react";
import Header from "../../UI/Header/Header";
import d from "../../Components/ManagerOptions/managerOptions.module.scss";
import s from './pointsInfoPage.module.scss';
import leftIcon from '../../assets/homepage/left.svg';
import infoIcon from "../../assets/homepage/infoIcon.svg";
import {useNavigate} from "react-router-dom";
import PointsTable from "../../Components/PointsTable/PointsTable";
import NewPointModal from "../../Components/Modals/NewPointModal/NewPointModal";
import {connect} from "react-redux";
import {requestAgentPoints} from "../../redux/reducers/managerReducer/managerAction";

const header = new Headers();
const login = localStorage.getItem('login');
const password = localStorage.getItem('password');
header.append('Authorization', 'Basic ' + btoa(login + ':' + password));
header.append('Accept', 'application/json');

const PointsInfoPage = ({agentPoints, requestAgentPoints}) => {
    const navigate = useNavigate();
    const [showNewPointModal, setShowNewPointModal] = useState(false);

    const handleBack = () => {
        navigate(-1);
    }
    const fetchDataCallback = useCallback(async () => {
        try {
            await requestAgentPoints(header);
            // Делайте что-то с результатом
        } catch (error) {
            console.error('Ошибка:', error.message);
        }
    }, [requestAgentPoints]);

    useEffect(() => {
        fetchDataCallback();
    }, [fetchDataCallback, agentPoints]);

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
            <PointsTable data={agentPoints}/>
            <NewPointModal show={showNewPointModal} handleClose={() => setShowNewPointModal(false)}/>
        </div>
    )
}

const mapStateToProps = (store) => ({
    agentPoints: store.manager.agentPoints,
})

export default connect(mapStateToProps, {requestAgentPoints})(PointsInfoPage);