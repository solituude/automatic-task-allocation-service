import React, {useState} from "react";
import {Button, Modal} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import {connect} from "react-redux";
import {createNewPoint} from "../../../redux/reducers/managerReducer/managerAction";

const header = new Headers();
const loginLS = localStorage.getItem('login');
const passwordLS = localStorage.getItem('password');
header.append('Authorization', 'Basic ' + btoa(loginLS + ':' + passwordLS));
header.append('Content-Type', 'application/json');
header.append('Accept', 'application/json');


const NewPointModal = ({show, handleClose, createNewPoint}) => {
    const [newPoint, setNewPoint] = useState({
        address: "",
        joinTime: "",
        materialsDelivered: false,
        cardIssuanceDaysPassed: 0,
        approvedAppsCount: 0,
        issuedCardsCount: 0
    })

    const handleCreate = () => {
        console.log(newPoint)
        createNewPoint(header, newPoint);
        handleClose();
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Создание новой агентской точки</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    Адрес
                    <Form.Control value={newPoint.address} onChange={(e) => setNewPoint({...newPoint, address: e.target.value})} type="text"/>
                </div>
                <div>
                    Когда подключена точка
                    <Form.Select value={newPoint.joinTime}
                                 onChange={(e) => setNewPoint({...newPoint, joinTime: e.target.value})}>
                        <option value="YESTERDAY">Вчера</option>
                        <option value="LONG_AGO">Давно</option>
                    </Form.Select>
                </div>

                <div>
                    Карты и материалы доставлены?
                    <Form.Select value={newPoint.materialsDelivered.toString()}
                                 onChange={(e) => setNewPoint({...newPoint, materialsDelivered: Boolean(e.target.value)})}>

                        <option value="1">Да</option>
                        <option value="0">Нет</option>
                    </Form.Select>
                </div>

                <div>
                    Кол-во дней после выдачи последней карты
                    <Form.Control value={newPoint.cardIssuanceDaysPassed.toString()}
                                  onChange={(e) => setNewPoint({...newPoint, cardIssuanceDaysPassed: Number(e.target.value)})}
                    type="number"/>
                </div>
                <div>
                    Количество одобренных заявок
                    <Form.Control value={newPoint.approvedAppsCount}
                                  onChange={(e) => setNewPoint({...newPoint, approvedAppsCount: Number(e.target.value)})}
                                  type="number"/>
                </div>
                <div>
                    Кол-во выданных карт
                    <Form.Control value={newPoint.issuedCardsCount}
                                  onChange={(e) => setNewPoint({...newPoint, issuedCardsCount: Number(e.target.value)})}
                                  type="number"/>
                </div>


            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Закрыть
                </Button>
                <Button variant="primary" onClick={handleCreate}>
                    Сохранить
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

const mapStateToProps = (store) => ({

    isFetching: store.main.isFetching
})

export default connect(mapStateToProps, {createNewPoint})(NewPointModal);