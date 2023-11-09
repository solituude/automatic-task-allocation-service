import React from "react";
import {Button, Modal} from "react-bootstrap";
import Form from "react-bootstrap/Form";

// по айдишнику получаю информацию конкретной точки и потом меняю его по кнопке сохранить

const EditPointModal = ({id, show, handleClose}) => {
    return(
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Редактирование записи {id}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    Адрес
                    <Form.Control type="text" />
                </div>
                <div>
                    Когда подключена точка
                    <Form.Select>
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
                <Button variant="primary" onClick={handleClose}>
                    Сохранить
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default EditPointModal;