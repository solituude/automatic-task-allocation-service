import React from "react";
import {Button, Modal} from "react-bootstrap";

const DeletingTaskModal = ({id, show, handleClose}) => {
    return(
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Удаление задачи {id}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    Текст задачи

                </div>
                <div>
                    Сотрудник

                </div>

                <div>
                    Адрес точки

                </div>

                <div>
                    Время выполнения задачи

                </div>
                <div>
                    Время начала выполнения

                </div>
                <div>
                    Статус

                </div>

                <div>
                    Время передвижения до точки

                </div>
                <div>
                    Расстояние от предыдущего пункта

                </div>
                <div>
                    Время формирования задачи

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

export default DeletingTaskModal;