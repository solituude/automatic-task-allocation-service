import React from "react";
import Header from "../../UI/Header/Header";
import s from "./taskDistribution.module.scss";
import leftIcon from "../../assets/homepage/left.svg";
import d from "../../Components/ManagerOptions/managerOptions.module.scss";


import {NavLink, useNavigate} from "react-router-dom";
import distributeIcon from "../../assets/homepage/distributeIcon.svg";
import ManagerTaskTable from "../../Components/ManagerTaskTable/ManagerTaskTable";

const data =  [
    {
        "id": 0,
        "type": "DEPARTURE",
        "agentPointId": 0,
        "agentPointAddress": "string",
        "creationTime": "2000-01-01",
        "startTime": "12:00",
        "gettingTime": 0,
        "distanceTo": 0,
        "completeTime": 0,
        "employeeId": 0,
        "employeeFullName": "string",
        "order": 0,
        "status": {
            "isCompleted": true,
            "comment": "string"
        }
    }
]

const TaskDistribution = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    }

    return(
        <div>
            <Header/>
            <button onClick={handleBack} className={s.back__button}>
                <img src={leftIcon} alt={"<"}/>
                <span className={d.option__label}>Список задач</span>
                <img src={distributeIcon} alt={"i"}/>
            </button>

            <div className={s.button__container}>
                <button className={s.distribution__button}>
                    Распределить задачи
                </button>

                <NavLink to='/taskDistribution/archiveTasks'>
                    <button className={s.archive__button}>
                        Архив задач
                    </button>
                </NavLink>

            </div>



            <ManagerTaskTable data={data}/>


        </div>
    )
}

export default TaskDistribution;