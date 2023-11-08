import React, {useEffect, useState} from "react";
import Header from "../../UI/Header/Header";
import s from "../PointsInfoPage/pointsInfoPage.module.scss";
import leftIcon from "../../assets/homepage/left.svg";
import d from "../../Components/ManagerOptions/managerOptions.module.scss";
import infoIcon from "../../assets/homepage/infoIcon.svg";
import {useNavigate} from "react-router-dom";
import DepartureManual from "../../Components/DepartureManual/DepartureManual";
import TuitionManual from "../../Components/TuitionManual/TuitionManual";
import DeliveryManual from "../../Components/DeliveryManual/DeliveryManual";
import style from './manualPage.module.scss';

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
        // console.log(manualID);
    }, [manualID])

    return(
        <div>
            <Header/>
            <button onClick={handleBack} className={s.back__button}>
                <img src={leftIcon} alt={"<"}/>
                <span className={d.option__label}>Редактирование справочников</span>
                <img src={infoIcon} alt={"i"}/>
            </button>

            <div className={style.button__container}>
                {
                    test.map((item) => (
                        <button className={item.id === manualID ? style.manual__button_active : style.manual__button}
                                key={item.id}
                                onClick={() => setManualID(item.id)}>

                            <span className={item.id === manualID ? style.manual__label_active : style.manual__label}>
                                {item.name}
                            </span>
                        </button>
                    ))
                }
            </div>

            <div className={style.manual__container}>
                {manualID === 0 ? <DepartureManual/> : null}
                {manualID === 1 ? <TuitionManual/> : null}
                {manualID === 2 ? <DeliveryManual/> : null}
            </div>

        </div>
    )
}

export default ManualPage;
