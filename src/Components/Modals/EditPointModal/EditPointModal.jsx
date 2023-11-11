import React, {useCallback, useEffect, useState} from "react";
import {Button, Modal} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import {connect} from "react-redux";
import {editPoint, requestPointByID} from "../../../redux/reducers/managerReducer/managerAction";

// по айдишнику получаю информацию конкретной точки и потом меняю его по кнопке сохранить
const header = new Headers();
const loginLS = localStorage.getItem('login');
const passwordLS = localStorage.getItem('password');
header.append('Authorization', 'Basic ' + btoa(loginLS + ':' + passwordLS));
header.append('Content-Type', 'application/json');
header.append('Accept', 'application/json');

const EditPointModal = ({id, show, handleClose,requestPointByID, currentAgentPoint, editPoint}) => {
    const [newPoint, setNewPoint] = useState({
        address: "string",
        joinTime: "YESTERDAY",
        materialsDelivered: true,
        cardIssuanceDaysPassed: 0,
        approvedAppsCount: 0,
        issuedCardsCount: 0
    })

    const fetchDataCallback = useCallback(async () => {
        try {
            await requestPointByID(header, id);
            // console.log(res)
            setNewPoint(currentAgentPoint);
            // Делайте что-то с результатом
        } catch (error) {
            console.error('Ошибка:', error.message);
        }
    }, [requestPointByID]);

    useEffect(() => {
        fetchDataCallback();
    }, [fetchDataCallback]);


    const handleEdit = () => {
        editPoint(header, JSON.stringify(newPoint), id)
    }
    // useEffect(() => {
    //     requestPointByID(header, id)
    //     console.log(currentAgentPoint)
    //     setNewPoint(currentAgentPoint);
    // },[])
    return(
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Редактирование записи {id}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    Адрес
                    <Form.Control defaultValue={currentAgentPoint.address} onChange={(e) => setNewPoint({...newPoint, address: e.target.value})} type="text" />
                </div>
                <div>
                    Когда подключена точка
                    <Form.Select defaultValue={currentAgentPoint.joinTime}>
                        <option value="YESTERDAY">Вчера</option>
                        <option value="LONG">Давно</option>
                    </Form.Select>
                </div>

                <div>
                    Карты и материалы доставлены?
                    <Form.Select>
                        <option value="TRUE">Да</option>
                        <option value="FALSE">Нет</option>
                    </Form.Select>
                </div>

                <div>
                    Кол-во дней после выдачи последней карты
                    <Form.Control type="number" />
                </div>
                <div>
                    Количество одобренных заявок
                    <Form.Control type="number" />
                </div>
                <div>
                    Кол-во выданных карт
                    <Form.Control type="number" />
                </div>


            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Закрыть
                </Button>
                <Button variant="primary" onClick={handleEdit}>
                    Сохранить
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
const mapStateToProps = (store) => ({
    currentAgentPoint: store.manager.currentAgentPoint,
    isFetching: store.main.isFetching
})
export default connect(mapStateToProps, {requestPointByID, editPoint})(EditPointModal);