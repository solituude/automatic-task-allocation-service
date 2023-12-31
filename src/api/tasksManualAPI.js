export const tasksManualAPI = {
    // Требуемая роль: ADMIN или MANAGER

    // получить справочник задачи выезда
    getDepartureManual(header) {
        return fetch('/tasks/departure/manual', {
            method: 'GET',
            headers: header,
        });
    },

    //изменить справочник задачи выезда
    changeDepartureManual(header, body) {
        return fetch('/tasks/departure/manual', {
            method: 'PUT',
            headers: header,
            body: body
        });
    },

    // получить справочник задачи обучения
    getTuitionManual(header) {
        return fetch('/tasks/tuition/manual', {
            method: 'GET',
            headers: header,
        });
    },

    // изменить справочник задачи обучения
    changeTuitionManual(header, body) {
        return fetch('/tasks/tuition/manual', {
            method: 'PUT',
            headers: header,
            body: body
        });
    },
    // получить справочник задачи доставки
    getDeliveryManual(header) {
        return fetch('/tasks/delivery/manual', {
            method: 'GET',
            headers: header,
        });
    },
    // получить справочник задачи доставки
    changeDeliveryManual(header, body) {
        return fetch('/tasks/delivery/manual', {
            method: 'PUT',
            headers: header,
            body: body
        });
    },
}