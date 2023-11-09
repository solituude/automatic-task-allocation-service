import React from "react";
import {Button, Modal} from "react-bootstrap";
import Form from "react-bootstrap/Form";

const DeletingPointModal = ({id, show, handleClose}) => {
    return(
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Вы точно хотите удалить запись {id}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    Адрес

                </div>
                <div>
                    Когда подключена точка

                </div>

                <div>
                    Карты и материалы доставлены?

                </div>

                <div>
                    Кол-во дней после выдачи последней карты

                </div>
                <div>
                    Количество одобренных заявок

                </div>
                <div>
                    Кол-во выданных карт

                </div>


            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Закрыть
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Удалить
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default DeletingPointModal;