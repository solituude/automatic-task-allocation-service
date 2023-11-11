import React from "react";
import {Button, Modal} from "react-bootstrap";
import Form from "react-bootstrap/Form";

const EditTaskModal = ({data, id, show, handleClose}) => {
    console.log(data)
    return(
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Редактирование задачи {id}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    Текст задачи
                    <Form.Control  type="text" />
                </div>
                <div>
                    Сотрудник
                    <Form.Control type="text" />
                </div>

                <div>
                    Адрес точки
                    <Form.Control type="text" />
                </div>

                <div>
                    Время выполнения задачи
                    <Form.Control type="number" />
                </div>
                <div>
                    Время начала выполнения
                    <Form.Control type="number" />
                </div>
                <div>
                    Статус
                    <Form.Select>
                        <option value="TRUE">Выполнено</option>
                        <option value="FALSE">Не выполнено</option>
                    </Form.Select>
                </div>

                <div>
                    Время передвижения до точки
                    <Form.Control type="number" />
                </div>
                <div>
                    Расстояние от предыдущего пункта
                    <Form.Control type="number" />
                </div>
                <div>
                    Время формирования задачи
                    <Form.Control type="date" />
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

export default EditTaskModal;