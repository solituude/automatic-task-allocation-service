import React from "react";
import s from './employeeSlider.module.scss';
import employeeIcon from '../../assets/homepage/employeeIcon.svg';

const users = [
    {
        name: "Дерягин Никита Владимирович",
        role: "Senior",
    },
    {
        name: "Петрошев Валерий Павлович",
        role: "Middle",
    },
    {
        name: "igor",
        role: "Middle",
    },
    {
        name: "igor",
        role: "Middle",
    },
]

const EmployeeItem = ({name, role}) => {
    return(
        <div className={s.employee__container}>
            <span className={s.name__label}>
                {name}
            </span>
            <span className={s.role__label}>
                {role}
            </span>
            <img src={employeeIcon} alt={"i"}/>
        </div>
    )
}

const EmployeeSlider = () => {
    return(
        <div className={s.container}>
            <span className={s.header}>Сотрудники</span>
            <div className={s.slider__container}>
                {users.map((user) => (
                    <EmployeeItem name={user.name} role={user.role}/>
                ))}
            </div>
        </div>
    )
}

export default EmployeeSlider;
