export const tasksAPI = {
    // сформировать новый список задач (роль: менеджер)
    generateTasks(header) {
        return fetch(`/tasks/generate`, {
            method: "POST",
            headers: header,
        })
    },

    // создать новую задачу (роль: ьенеджер)
    createTask(header, body) {
        return fetch(`/tasks`, {
            method: "POST",
            headers: header,
            body: body
        })
    },

    //получить список всех задач (все роли)
    // Требуемая роль: ADMIN или MANAGER
    // Если роль пользователя EMPLOYEE, то возвращаются задачи только для данного сотрудника. При этом параметры employee_id, agent_point_id, archived не играют никакой роли.
    // Для сотрудника (в т.ч. если указан employee_id) всегда возращается отсортированными по полю order. Для остальных - по id.
    getAllTasks(header) {
        return fetch(`/api/tasks/all`, {
            method: "GET",
            headers: header,
        })
    },
    //получить задачу по айди (менеджер, сотрудник к которому относится эта задача)
    getTaskByID(header, id) {
        return fetch(`/api/tasks/${id}`, {
            method: "GET",
            headers: header
        })
    },

    //изменить задачу по айди (менеджер)
    changeTaskByID(header, body, id) {
        return fetch(`/api/tasks/${id}`, {
            method: "PUT",
            headers: header,
            body: body
        })
    },

    //удалить задачу по айди (менеджер)
    deleteTaskByID(header, id) {
        return fetch(`/tasks/${id}`, {
            method: "DELETE",
            headers: header,
        })
    },

    // получить статус задачи по айди (менеджер)
    getTaskStatus(header, id) {
        return fetch(`/tasks/${id}/status`, {
            method: "GET",
            headers: header,
        })
    },

    // изменить статус задачи по айди (сотрудник)
    changeTaskStatus(header, body, id) {
        return fetch(`/tasks/${id}/status`, {
            method: "PUT",
            headers: header,
            body: body
        })
    },
}