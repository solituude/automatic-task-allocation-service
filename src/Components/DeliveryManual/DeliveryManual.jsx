import React, {useState} from "react";
import s from "../DepartureManual/departureManual.module.scss";
import {Button, Modal} from "react-bootstrap";
import Form from "react-bootstrap/Form";

const info = {
    "priority": "LOW",
    "performTime": 0,
    "requiredEmployeeGrade": "JUNIOR",
    "joinTime": "YESTERDAY"
}


const CustomModal = ({show, handleClose}) => {
    return(
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Редактирование</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    Приоритет
                    <Form.Select defaultValue={"LOW"}>
                        <option value="LOW">Низкий</option>
                        <option value="MIDDLE">Средний</option>
                        <option value="HIGH">Высокий</option>
                    </Form.Select>
                </div>
                <div>
                    Требуемый уровень сотрудника
                    <Form.Select defaultValue={"MIDDLE"}>
                        <option value="JUNIOR">Джун</option>
                        <option value="MIDDLE">Мидл</option>
                        <option value="SENIOR">Сеньор</option>
                    </Form.Select>
                </div>

                <div>
                    Время выполнения (в часах)
                    <Form.Select defaultValue={"MIDDLE"}>
                        <option value="1">1</option>
                        <option value="1.5">1.5</option>
                        <option value="2">2</option>
                        <option value="2.5">2.5</option>
                        <option value="3">3</option>
                        <option value="3.5">3.5</option>
                        <option value="4">4</option>
                    </Form.Select>
                </div>

                <div>
                    Когда подключена точка
                    <Form.Select defaultValue={"недавно"}>
                        <option value="YESTERDAY">вчера</option>
                        <option value="недавно">недавно</option>
                        <option value="давно">давно</option>

                    </Form.Select>
                </div>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Закрыть
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Сохранить
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

const DeliveryManual = () => {
    const [showModal, setShowModal] = useState(false);
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
            <button onClick={() => setShowModal(true)}>Редактировать</button>
            <CustomModal show={showModal} handleClose={() => setShowModal(false)}/>
        </div>
    )
}

export default DeliveryManual;