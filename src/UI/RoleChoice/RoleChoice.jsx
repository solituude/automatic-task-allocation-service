import React from "react";
import s from "../../Pages/SignUpPage/signUpPage.module.scss";
import roleManagerIcon from "../../assets/signUpPage/roleManager.svg";
import roleEmployeeIcon from "../../assets/signUpPage/roleEmployee.svg";

const RoleChoice = ({setRole, role}) => {
    return(
        <div className={s.role__container}>
            <div className={s.role__item}>
                <button onClick={() => setRole('manager')}
                        className={role === 'manager' ? s.nonDecoration__button_active : s.nonDecoration__button}>
                    <img src={roleManagerIcon} alt={'man'}/>
                </button>
                <span className={s.role__label}>Менеджер</span>
            </div>

            <div className={s.role__item}>
                <button onClick={() => setRole('employee')}
                        className={role === 'employee' ? s.nonDecoration__button_active : s.nonDecoration__button}>
                    <img src={roleEmployeeIcon} alt={'empl'}/>
                </button>
                <span className={s.role__label}>Сотрудник</span>
            </div>
        </div>
    )
}

export default RoleChoice;