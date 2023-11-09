import React from "react";
import s from './managerTaskTable.module.scss';

const ManagerTaskTable = ({data}) => {
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
                </tr>
                </thead>
                <tbody>
                { data.length === 0 ? <tr><td colSpan={9}>Задач пока нет</td></tr> : null }
                {
                    data.map((task) => (
                        <tr key={task.id}>
                            <td>{task.id}</td>
                            <td>{task.type}</td>
                            <td>{task.employeeFullName}</td>
                            <td>{task.agentPointAddress}</td>
                            <td>{task.completeTime}</td>
                            <td>{task.startTime}</td>
                            <td>{task.status.isCompleted ? <span>Выполнено</span> : <span>Не выполнено</span>}</td>
                            <td>{task.gettingTime}</td>
                            <td>{task.distanceTo}</td>
                            <td>{task.creationTime}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    )
}

export default ManagerTaskTable;