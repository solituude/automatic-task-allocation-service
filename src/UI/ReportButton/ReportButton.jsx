import React from "react";
import reportIcon from '../../assets/homepage/report.svg';
import s from './reportButton.module.scss';

export const ReportButton = () => {
    return(
        <button className={s.container}>
            <img src={reportIcon} alt={"r"}/>
            <span className={s.label}>
                Сформировать отчет
            </span>
        </button>
    )
}
