import React from "react";
import s from "../DepartureManual/departureManual.module.scss";

const info = {
    "priority": "LOW",
    "performTime": 0,
    "requiredEmployeeGrade": "JUNIOR",
    "joinTime": "YESTERDAY"
}

const DeliveryManual = () => {
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
                    Точка подключена
                        <span className={s.value__text}>
                             {info.joinTime}
                        </span>
                </span>
            </div>
            <div className={s.info__tab}>
                <span className={s.regular__text}>
                    <span className={s.value__text}>
                        Условие 2:
                    </span>
                    <br/> <br/>
                    Карты и материалы не доставлялись
                </span>
            </div>

        </div>
    )
}

export default DeliveryManual;