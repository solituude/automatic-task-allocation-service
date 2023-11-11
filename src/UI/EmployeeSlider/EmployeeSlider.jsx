import React from "react";
import s from './employeeSlider.module.scss';
import employeeIcon from '../../assets/homepage/employeeIcon.svg';

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

const EmployeeSlider = ({data}) => {
    return(
        <div className={s.container}>
            <span className={s.header}>Сотрудники</span>
            <div className={s.slider__container}>
                {data.map((user) => (
                    <div key={user.account.id}><EmployeeItem name={user.account.fullName} role={user.grade}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EmployeeSlider;
