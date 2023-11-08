import React from "react";
import s from "../DepartureManual/departureManual.module.scss";

const info = {
    "priority": "LOW",
    "performTime": 0,
    "requiredEmployeeGrade": "JUNIOR",
    "approvedAppsPercentage": 0,
    "issuedCardsCount": 0
}

const TuitionManual = () => {
    return(
        <div className={s.container}>
            <div className={s.info__tab}>
                <span className={s.regular__text}>
                    Приоритет:
                    <span className={s.value__text}>
                        {info.priority}
                    </span>
                </span>
            </div>
            <div className={s.info__tab}>
                <span className={s.regular__text}>
                    Время выполнения:
                    <span className={s.value__text}>
                        {info.performTime}
                    </span>
                </span>
            </div>

            <div className={s.info__tab}>
                <span className={s.regular__text}>
                    Требуемый уровень сотрудника:
                    <span className={s.value__text}>
                        {info.requiredEmployeeGrade}
                    </span>
                </span>
            </div>

            <div className={s.info__tab}>
                <span className={s.regular__text}>
                    <span className={s.value__text}>
                        Условие:
                    </span>
                    <br/> <br/>
                    Отношение кол-ва выданных карт к одобренным заявкам менее
                        <span className={s.value__text}>
                             {info.approvedAppsPercentage}
                        </span> %, если выдано больше
                        <span className={s.value__text}>
                             {info.issuedCardsCount}
                        </span> карт
                </span>
            </div>


        </div>
        // <div>
        //     {info.priority}
        //     {info.performTime}
        //     {info.requiredEmployeeGrade}
        //     {info.approvedAppsPercentage}
        //     {info.issuedCardsCount}
        // </div>
    )
}

export default TuitionManual;