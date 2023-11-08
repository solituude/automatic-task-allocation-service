import React, {useEffect, useState} from "react";
import Header from "../../UI/Header/Header";
import s from "../PointsInfoPage/pointsInfoPage.module.scss";
import leftIcon from "../../assets/homepage/left.svg";
import d from "../../Components/ManagerOptions/managerOptions.module.scss";
import infoIcon from "../../assets/homepage/infoIcon.svg";
import {useNavigate} from "react-router-dom";
import ManualInfo from "../../UI/ManualInfo/ManualInfo";

const test = [
    {
        id: 0,
        name: 'Выезд на точку',
    },
    {
        id: 1,
        name: 'Обучение агента',
    },
    {
        id: 2,
        name: 'Доставка карт и материалов',
    },

];



const ManualPage = () => {
    const navigate = useNavigate();
    const [manualID, setManualID] = useState(0);

    const handleBack = () => {
        navigate(-1);
    }

    useEffect(() => {
        // получение информации о справочнике (2 запроса)
    }, [manualID])

    return(
        <div>
            <Header/>
            <button onClick={handleBack} className={s.back__button}>
                <img src={leftIcon} alt={"<"}/>
                <span className={d.option__label}>Редактирование справочников</span>
                <img src={infoIcon} alt={"i"}/>
            </button>
            {/*я получаю все справочники по GET /handBooks, дальше прохожусь по этому массиву и делаю кнопки у каждой
             кнопки будет ключ, при нажатии на кнопку номер ключа (айдишник стправочника) передается в состояние*/}

            <div>
                {
                    test.map((item) => (
                        <button key={item.id} onClick={() => setManualID(test.id)}>{item.name}</button>
                    ))
                }
            </div>

            {/* делаю запрос по айдишнику справочника (/handbooks/{id} И /conditions/{id}) и мне выдается информация
            по справочнику */}
            <ManualInfo/>

        </div>
    )
}

export default ManualPage;
