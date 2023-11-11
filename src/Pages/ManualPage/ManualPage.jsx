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
import {connect} from "react-redux";
import {
    requestDeliveryManual,
    requestDepartureManual,
    requestTuitionManual
} from "../../redux/reducers/managerReducer/managerAction";

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



const ManualPage = ({departureManual, tuitionManual, deliveryManual, requestDepartureManual, requestTuitionManual, requestDeliveryManual}) => {
    const navigate = useNavigate();
    const [manualID, setManualID] = useState(0);
    const loginLS = localStorage.getItem('login');
    const passwordLS = localStorage.getItem('password');
    const header = new Headers();
    header.append('Authorization', 'Basic ' + btoa(loginLS + ':' + passwordLS));
    header.append('Accept', 'application/json');

    const handleBack = () => {
        navigate(-1);
    }

    useEffect(() => {
        // получение информации о справочнике (2 запроса)
        // console.log(manualID);
    }, [manualID])

    useEffect(() => {
        requestDepartureManual(header);
        requestTuitionManual(header);
        requestDeliveryManual(header);
    },[])


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
                {manualID === 0 ? <DepartureManual data={departureManual}/> : null}
                {manualID === 1 ? <TuitionManual data={tuitionManual}/> : null}
                {manualID === 2 ? <DeliveryManual data={deliveryManual}/> : null}
            </div>

        </div>
    )
}

const mapStateToProps = (store) => ({
    departureManual: store.manager.departureManual,
    tuitionManual: store.manager.tuitionManual,
    deliveryManual: store.manager.deliveryManual,
})

export default connect(mapStateToProps, {requestDepartureManual, requestTuitionManual, requestDeliveryManual})(ManualPage);
