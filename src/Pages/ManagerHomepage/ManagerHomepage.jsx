import React from "react";
import Header from "../../UI/Header/Header";
import EmployeeSlider from "../../UI/EmployeeSlider/EmployeeSlider";
import s from './managerHomepage.module.scss'
import {ReportButton} from "../../UI/ReportButton/ReportButton";
import ManagerOptions from "../../Components/ManegerOptions/ManagerOptions";

const ManagerHomepage = () => {
    return(
        <div className={s.container}>
            <Header/>
            <EmployeeSlider/>
            <div className={s.content}>
                <ReportButton/>
                <ManagerOptions/>
            </div>
        </div>
    )
}

export default ManagerHomepage;