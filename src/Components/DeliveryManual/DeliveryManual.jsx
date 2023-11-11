import React, {useState} from "react";
import s from "../DepartureManual/departureManual.module.scss";
import {Button, Modal} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import {convertToSentence} from "../../helpers/helpers";
import {connect} from "react-redux";
import {setDeliveryManual, updateDeliveryManual} from "../../redux/reducers/managerReducer/managerAction";

const header = new Headers();
const loginLS = localStorage.getItem('login');
const passwordLS = localStorage.getItem('password');
header.append('Authorization', 'Basic ' + btoa(loginLS + ':' + passwordLS));
header.append('Accept', 'application/json');
header.append('Content-Type', 'application/json');

const CustomModal = ({data, show, handleClose, updateDeliveryManual}) => {
    const [item, setItem] = useState({});

    const handleUpdate = () => {
        updateDeliveryManual(header, JSON.stringify(item))
    }

    return(
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Редактирование</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    Приоритет
                    <Form.Select defaultValue={data.priority} onChange={(e) =>
                        setItem({...item, priority: e.target.value})}>
                        <option value="LOW">Низкий</option>
                        <option value="MIDDLE">Средний</option>
                        <option value="HIGH">Высокий</option>
                    </Form.Select>
                </div>
                <div>
                    Требуемый уровень сотрудника
                    <Form.Select defaultValue={data.requiredEmployeeGrade} onChange={(e) =>
                        setItem({...item, requiredEmployeeGrade: e.target.value})}>
                        <option value="JUNIOR">Джун</option>
                        <option value="MIDDLE">Мидл</option>
                        <option value="SENIOR">Сеньор</option>
                    </Form.Select>
                </div>

                <div>
                    Время выполнения (в часах)
                    <Form.Control defaultValue={data.performTime} type={"number"} onChange={(e) =>
                        setItem({...item, performTime: Number(e.target.value)})}/>
                </div>

                <div>
                    Когда подключена точка
                    <Form.Select defaultValue={data.joinTime} onChange={(e) =>
                        setItem({...item, joinTime: e.target.value})}>
                        <option value="YESTERDAY">вчера</option>
                        <option value="LONG_AGO">давно</option>

                    </Form.Select>
                </div>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Закрыть
                </Button>
                <Button variant="primary" onClick={handleUpdate}>
                    Сохранить
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

const DeliveryManual = ({data, updateDeliveryManual}) => {
    const [showModal, setShowModal] = useState(false);
    return(
        <div className={s.container}>
            <div className={s.info__tab}>
                <span className={s.regular__text}>
                    Приоритет:
                    <span className={s.value__text}>
                        {convertToSentence(data.priority)}
                    </span>
                </span>
            </div>
            <div className={s.info__tab}>
                <span className={s.regular__text}>
                    Время выполнения:
                    <span className={s.value__text}>
                        {data.performTime}
                    </span>
                </span>
            </div>

            <div className={s.info__tab}>
                <span className={s.regular__text}>
                    Минимальный требуемый уровень сотрудника:
                    <span className={s.value__text}>
                        {data.requiredEmployeeGrade}
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
                             {convertToSentence(data.joinTime)}
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
            <button className={s.edit__button} onClick={() => setShowModal(true)}>Редактировать</button>
            <CustomModal updateDeliveryManual={updateDeliveryManual} data={data} show={showModal} handleClose={() => setShowModal(false)}/>
        </div>
    )
}

const mapStateToProps = (store) => ({
    deliveryManual: store.manager.deliveryManual,
})

export default connect(mapStateToProps, {updateDeliveryManual})(DeliveryManual);