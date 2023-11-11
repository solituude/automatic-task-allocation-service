import React from "react";
import Header from "../../UI/Header/Header";
import ManagerTaskTable from "../../Components/ManagerTaskTable/ManagerTaskTable";
import s from "../TaskDistributionPage/taskDistribution.module.scss";
import leftIcon from "../../assets/homepage/left.svg";
import d from "../../Components/ManagerOptions/managerOptions.module.scss";
import distributeIcon from "../../assets/homepage/distributeIcon.svg";
import {useNavigate} from "react-router-dom";
import {connect} from "react-redux";

const ArchiveTasksPage = ({archivedTasks, isFetching}) => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    }
    console.log(archivedTasks)

    return(
        <div>
            {
                !isFetching ? <><Header/>
                    <button onClick={handleBack} className={s.back__button}>
                        <img src={leftIcon} alt={"<"}/>
                        <span className={d.option__label}>Архив задач</span>
                        <img src={distributeIcon} alt={"i"}/>
                    </button>
                    <ManagerTaskTable data={archivedTasks}/></> : <div>загрузка...</div>
            }
        </div>
    )
}

const mapStateToProps = (store) => ({
    archivedTasks: store.manager.archivedTasks,
    isFetching: store.manager.isFetching,
})

export default connect(mapStateToProps)(ArchiveTasksPage);