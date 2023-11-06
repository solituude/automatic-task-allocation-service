import React from "react";
import Header from "../../UI/Header/Header";
import EmployeeSlider from "../../UI/EmployeeSlider/EmployeeSlider";
import s from './managerHomepage.module.scss'
import {ReportButton} from "../../UI/ReportButton/ReportButton";

const ManagerHomepage = () => {
    return(
        <div className={s.content}>
            <Header/>
            <EmployeeSlider/>

            <ReportButton/>

        </div>
    )
}

export default ManagerHomepage;