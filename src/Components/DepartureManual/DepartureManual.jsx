import React from "react";
import s from './departureManual.module.scss';

const info = {
    "priority": "LOW",
    "performTime": 0,
    "requiredEmployeeGrade": "JUNIOR",
    "issuedCardsMinDaysCount1": 0,
    "issuedCardsMinDaysCount2": 0
};
const DepartureManual = () => {
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
                        Условие 1:
                    </span>
                    <br/> <br/>
                    Дата выдачи последней карты более
                        <span className={s.value__text}>
                             {info.issuedCardsMinDaysCount1}
                        </span>
                    дней назад, при этом есть одобренные заявки
                </span>
            </div>
            <div className={s.info__tab}>
                <span className={s.regular__text}>
                    <span className={s.value__text}>
                        Условие 2:
                    </span>
                    <br/> <br/>
                    Дата выдачи последней карты более
                    <span className={s.value__text}>
                        {info.issuedCardsMinDaysCount2}
                    </span>
                    дней назад
                </span>
            </div>

        </div>
    )
}

export default DepartureManual