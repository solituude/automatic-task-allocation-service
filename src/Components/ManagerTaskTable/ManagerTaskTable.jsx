import React, {useState} from "react";
import s from './managerTaskTable.module.scss';
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditTaskModal from "../Modals/EditTaskModal/EditTaskModal";
import DeletingTaskModal from "../Modals/DeletingTaskModal/DeletingTaskModal";
import {convertToSentence} from "../../helpers/helpers";

const ManagerTaskTable = ({data}) => {
    const [pointID, setPointID] = useState();
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeletingModal, setShowDeletingModal] = useState(false);
    console.log(data)

    const handleClickEdit = (id) => {
        setPointID(id);
        setShowEditModal(true);
    }

    const handleClickDeleting = (id) => {
        setPointID(id);
        setShowDeletingModal(true);
    }
    return(
        <div className={s.container}>
            <table>
                <thead>
                <tr>
                    <th>№</th>
                    <th>Задача</th>
                    <th>Сотрудник</th>
                    <th>Адрес точки</th>
                    <th>Время выполнения задачи</th>
                    <th>Время начала выполнения</th>
                    <th>Статус</th>
                    <th>Время передвижения до точки</th>
                    <th>Расстояние от предыдущего пункта</th>
                    <th>Время формирования задачи</th>
                    <th>Редактировать</th>
                    <th>Удалить</th>
                </tr>
                </thead>
                <tbody>
                { data.length === 0 || data.totalItemCount === 0 ? <tr><td colSpan={9}>Задач пока нет</td></tr> :
                    data.items.map((task) => (
                        <tr key={task.id}>
                            <td>{task.id}</td>
                            <td>{convertToSentence(task.type)}</td>
                            <td>{task.employeeFullName}</td>
                            <td>{task.agentPointAddress}</td>
                            <td>{task.completeTime}</td>
                            <td>{task.startTime}</td>
                            <td>{task.isCompleted === null ? <span>Выполнено</span> : <span>Не выполнено</span>}</td>
                            <td>{task.gettingTime}</td>
                            <td>{task.distanceTo}</td>
                            <td>{task.creationTime}</td>
                            <td>
                                <button className={s.custom__button} onClick={() => handleClickEdit(task.id)}>
                                    <EditIcon/>
                                </button>
                            </td>
                            <td>
                                <button className={s.custom__button} onClick={() => handleClickDeleting(task.id)}>
                                    <DeleteForeverIcon/>
                                </button>
                            </td>
                            <EditTaskModal  data={task} id={pointID} show={showEditModal} handleClose={() => setShowEditModal(false)}/>
                            <DeletingTaskModal id={pointID} show={showDeletingModal} handleClose={() => setShowDeletingModal(false)}/>
                        </tr>
                    ))
                }

                </tbody>
            </table>
        </div>
    )
}

export default ManagerTaskTable;