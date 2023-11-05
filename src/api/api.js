
export const employeeAPI =  {
    // полчение списка всех сотрудников
    getAllEmployees(header, currBody) {
        return fetch('/people', {
            method: 'GET',
            headers: header,
            body: currBody,
        });
    },

    // получение информации о конкретном сотруднике
    getCurrentEmployee(header, body, id) {
        return fetch(`/poeple/${id}`, {
            method: 'GET',
            headers: header,
            body: body,
        })
    },


    // создание нового сотрудника
    createNewEmployee(header, body) {
        return fetch('/people', {
            method: 'POST',
            headers: header,
            body: body
        })
    },

    // обновление информации о сотруднике
    updateEmployeeInfo(header, body, id) {
        return fetch(`/people/${id}`, {
            method: 'PUT',
            headers: header,
            body: body
        })
    },

    // удаление сотрудника
    deleteEmployee(header, body, id) {
        return fetch(`/people/${id}`, {
            method: 'DELETE',
            headers: header,
        })
    },

    // получение пути для сотрудника
    getEmployeePath(header, body, id) {
        return fetch(`/people/${id}/path`, {
            method: 'GET',
            headers: header,
        })
    },

    // получение точек для сотрудника
    getEmployeePoints(header, body, id) {
        return fetch(`/people/${id}/points`, {
            method: 'GET',
            headers: header,
        })
    }
}

export const loginAPI = {
    createUser(header, body) {
        return fetch(`/logins`, {
            method: 'POST',
            headers: header,
            body: body
        })
    },

    getAllUsers(header) {
        return fetch(`/logins`, {
            method: 'GET',
            headers: header,
        })
    },

    getUser(header, id) {
        return fetch(`/logins/${id}`, {
            method: 'GET',
            headers: header,
        })
    },

    updateUserInfo(header, body, id) {
        return fetch(`/logins/${id}`, {
            method: 'PUT',
            headers: header,
            body: body
        })
    },

    deleteUser(header, id) {
        return fetch(`/logins/${id}`, {
            method: 'DELETE',
            headers: header,
        })
    },

    checkUserID(header, body) {
        return fetch(`/logins/check`, {
            method: 'POST',
            headers: header,
            body: body
        })
    },
}

export const handBookAPI = {
    createHandBook(header, body) {
        return fetch(`/handBooks`, {
            method: 'POST',
            headers: header,
            body: body
        })
    },

    getAllHandBooks(header) {
        return fetch(`/handBooks`, {
            method: 'GET',
            headers: header,
        })
    },

    getHandBook(header, id) {
        return fetch(`/handBooks/${id}`, {
            method: 'GET',
            headers: header
        })
    },

    updateHandBook(header, id) {
        return fetch(`/handBooks/${id}`, {
            method: 'PUT',
            headers: header
        })
    },

    deleteHandBook(header, id) {
        return fetch(`/handBooks/${id}`, {
            method: 'DELETE',
            headers: header
        })
    },
}

export const pointsAPI = {
    createPoints(header, body) {
        return fetch(`/points`, {
            method: 'POST',
            headers: header,
            body: body
        })
    },

    getAllPoints(header) {
        return fetch(`/points`, {
            method: 'GET',
            headers: header,
        })
    },

    getPoint(header, id) {
        return fetch(`/points/${id}`, {
            method: 'GET',
            headers: header,
        })
    },

    updatePoint(header, body, id) {
        return fetch(`/points/${id}`, {
            method: 'PUT',
            headers: header,
            body: body
        })
    },

    deletePoint(header, id) {
        return fetch(`/points/${id}`, {
            method: 'DELETE',
            headers: header,
        })
    },

    getStatusByPoint(header, id){
        return fetch(`/points/${id}/statuses`, {
            method: 'GET',
            headers: header,
        })
    },
}

export const statusesAPI = {
    createStatus(header, body) {
        return fetch(`/statuses`, {
            method: 'POST',
            headers: header,
            body: body
        })
    },

    getAllStatuses(header) {
        return fetch(`/statuses`, {
            method: 'GET',
            headers: header,
        })
    },

    getStatus(header, id) {
        return fetch(`/statuses/${id}`, {
            method: 'POST',
            headers: header,
        })
    },

    updateStatus(header, body, id) {
        return fetch(`/statuses/${id}`, {
            method: 'PUT',
            headers: header,
            body: body
        })
    },

    deleteStatus(header, id){
        return fetch(`/statuses/${id}`, {
            method: 'DELETE',
            headers: header,
        })
    }
}