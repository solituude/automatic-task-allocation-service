import React, {useEffect, useState} from "react";
import Header from "../../UI/Header/Header";
import s from './employeeHomepage.module.scss';
import downIcon from '../../assets/homepage/down.svg';
import leftIcon from '../../assets/homepage/left.svg';
import YandexMap from "../../Components/YandexMap/YandexMap";
import {YMaps} from "@pbe/react-yandex-maps";

const tasks = [
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
    },
    {
        "id": 1,
        "type": "DELIVERY",
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
    },
    {
        "id": 2,
        "type": "TUITION",
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
    },
]

const ExpandTaskInfo = ({id}) => {
    return(
        <div className={s.expand__container}>
            <div className={s.expand__item}>
                <span className={s.expand__regular}>
                    Задача: <span className={s.expand__info}>{tasks[id].type}</span>
                </span>

            </div>
            <div className={s.expand__item}>
                <span className={s.expand__regular}>Адрес точки: <span className={s.expand__info}>{tasks[id].agentPointAddress}</span></span>
            </div>
            <div className={s.expand__item}>
                <span className={s.expand__regular}>Время выполнения задачи:  <span className={s.expand__info}>{tasks[id].completeTime}</span></span>
            </div>
            <div className={s.expand__item}>
                <span className={s.expand__regular}>Время начала выполнения: <span className={s.expand__info}>{tasks[id].startTime}</span></span>
            </div>
            <div className={s.expand__item}>
                <span className={s.expand__regular}>Статус  <span className={s.expand__info}>{tasks[id].status.isCompleted.toString()}</span></span>
            </div>
            <div className={s.expand__item}>
                <span className={s.expand__regular}>Время передвижения до точки <span className={s.expand__info}>{tasks[id].gettingTime}</span></span>
            </div>
            <div className={s.expand__item}>
                <span className={s.expand__regular}>Расстояние до точки <span className={s.expand__info}> {tasks[id].distanceTo}</span></span>
            </div>
            <div className={s.expand__item}>
                <span className={s.expand__regular}>Время формирования задачи <span className={s.expand__info}> {tasks[id].creationTime}</span></span>
            </div>
        </div>
    )
}

// https://codesandbox.io/s/react-yandex-maps-react-18-xrxt4b
const EmployeeHomepage = () => {
    const [taskID, setTaskID] = useState(null);

    useEffect(() => {

    },[])

    const handleChangeStatus = (id) => {

    }

    return(
        <div className={s.container}>
            <Header/>
            <div className={s.content}>
                <span className={s.label__date}>Понедельник, 45 октября</span>
                <span className={s.label__header}>Задачи на сегодня</span>
                <form className={s.task__container}>
                    {
                        tasks.map((task) => (
                            <div className={s.task__fullInfo}>
                                <div key={task.id} className={s.task__tab}>
                                    <div className={s.tab__info}>
                                        <input type="checkbox" checked={task.status.isCompleted} onChange={() => handleChangeStatus(task.id)}/>
                                        <span className={s.task__label}>{task.type},</span>
                                        <span className={s.task__label}>{task.agentPointAddress}</span>
                                    </div>

                                    <div className={s.tab__info}>
                                        { task.type === "DELIVERY" ? <div className={s.low__priority}/> : null }
                                        { task.type === "TUITION" ? <div className={s.middle__priority}/> : null }
                                        { task.type === "DEPARTURE" ? <div className={s.high__priority}/> : null }
                                        {taskID === task.id ?
                                            <button type={"button"} className={s.more__button} onClick={() => setTaskID(null)}>
                                                <img src={downIcon} alt={"v"}/>
                                            </button>
                                            : <button type={"button"} className={s.more__button} onClick={() => setTaskID(task.id)}>
                                                <img src={leftIcon} width={16} alt={"<"}/>
                                            </button>}
                                    </div>
                                </div>
                                {taskID === task.id ? <ExpandTaskInfo id={taskID}/> : null}
                            </div>
                        ))
                    }
                </form>
                <YMaps query={{
                    load: "package.full",
                    apikey: '3327d964-2e91-4e7e-837d-22de6e8c2379'
                }}>

                    <YandexMap/>
                </YMaps>


            </div>
        </div>
    )
}

export default EmployeeHomepage;