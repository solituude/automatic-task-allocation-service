import React from "react";
import s from './managerOptions.module.scss'
import rightIcon from '../../assets/homepage/rightIcon.svg';
import infoIcon from '../../assets/homepage/infoIcon.svg';
import updateIcon from '../../assets/homepage/updateIcon.svg';
import distributeIcon from '../../assets/homepage/distributeIcon.svg';
import {NavLink} from "react-router-dom";

const ManagerOptions = () => {
    return(
        <div className={s.content}>
            <NavLink to='/pointsInfo' className={s.option__container} style={{textDecoration: "none"}}>
                <img src={rightIcon} alt={"<"}/>
                <span className={s.option__label}>Информация по агентским точкам</span>
                <img src={infoIcon} alt={"i"}/>
            </NavLink>

            <NavLink to='/handBook' className={s.option__container} style={{textDecoration: "none"}}>
                <img src={rightIcon} alt={"<"}/>
                <span className={s.option__label}>Редактирование справочников</span>
                <img src={updateIcon} alt={"i"}/>
            </NavLink>

            <NavLink to='/taskDistribution' className={s.option__container} style={{textDecoration: "none"}}>
                <img src={rightIcon} alt={"<"}/>
                <span className={s.option__label}>Список задач</span>
                <img src={distributeIcon} alt={"i"}/>
            </NavLink>
        </div>
    )
}

export default ManagerOptions;