import React, {useEffect, useState} from "react";
import Header from "../../UI/Header/Header";
import s from "./taskDistribution.module.scss";
import leftIcon from "../../assets/homepage/left.svg";
import d from "../../Components/ManagerOptions/managerOptions.module.scss";


import {NavLink, useNavigate} from "react-router-dom";
import distributeIcon from "../../assets/homepage/distributeIcon.svg";
import ManagerTaskTable from "../../Components/ManagerTaskTable/ManagerTaskTable";
import NewTaskModal from "../../Components/Modals/NewTaskModal/NewTaskModal";
import {connect} from "react-redux";
import {requestAllTasks, setNewArchivedTasks, setNewTasks} from "../../redux/reducers/managerReducer/managerAction";


const TaskDistribution = ({tasks, employees, requestAllTasks, setNewArchivedTasks}) => {
    const [showNewTaskModal, setShowNewTaskModal] = useState(false);
    const navigate = useNavigate();
    const header = new Headers();
    const loginLS = localStorage.getItem('login');
    const passwordLS = localStorage.getItem('password');
    header.append('Authorization', 'Basic ' + btoa(loginLS + ':' + passwordLS));
    header.append('Accept', 'application/json');
    const archiveData = [];


    const handleBack = () => {
        navigate(-1);
    }

    useEffect(() => {
        console.log(employees)
        // for (let emp = 0; emp < employees.length; emp++) {
        //     let employeeId = employees[emp].account.id;
        //     for (let point = 0; point < agentPoints.length; agentPoints++) {
        //         let pointID = agentPoints[point].id
        //         requestAllTasks(header, employeeId, pointID, false)
        //         console.log(tasks)
        //         // data.append(tasks)
        //         requestAllTasks(header, employeeId, pointID, false)
        //         //dataArchive.append(tasks)
        //     }
        // }
        requestAllTasks(header)
        setNewArchivedTasks(archiveData);

    },[])

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

                {/*<button className={s.add__button} onClick={handleShowNewTaskModal}>*/}
                {/*    Добавить задачу*/}
                {/*</button>*/}
            </div>

            <ManagerTaskTable data={tasks}/>
            <NewTaskModal show={showNewTaskModal} handleClose={() => setShowNewTaskModal(false)}/>
        </div>
    )
}

const mapStateToProps = (store) => ({
    employees: store.manager.employees,
    agentPoints: store.manager.agentPoints,
    tasks: store.manager.tasks,
    archivedTasks: store.manager.archivedTasks,
})

export default connect(mapStateToProps, {requestAllTasks, setNewTasks, setNewArchivedTasks})(TaskDistribution);