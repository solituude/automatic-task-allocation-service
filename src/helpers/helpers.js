export const convertToSentence = (str) => {
    switch (str) {
        case 'DELIVERY':
            return 'Доставка карт и материалов';
        case 'TUITION':
            return 'Обучение агента';
        case 'DEPARTURE':
            return 'Выезд на точку для стимулирования выдач';
        case 'YESTERDAY':
            return 'Вчера'
        case 'LONG_AGO':
            return 'Давно'
        case 'HIGH':
            return 'Высокий';
        case 'MIDDLE':
            return 'Средний'
        case 'LOW':
            return 'Низкий'
        case 'EMPLOYEE':
            return 'Выездной сотрудник'
        case 'MANAGER':
            return 'Менеджер'
        case 'ADMIN':
            return 'Администратор'
        default:
            return '';
    }
}

export const formatHours = (count) => {
    if (count === 1 || (count % 10 === 1 && count % 100 !== 11)) {
        return "часа";
    } else if (
        (count >= 2 && count <= 4) ||
        ((count % 10 >= 2 && count % 10 <= 4) && (count % 100 < 12 || count % 100 > 14))
    ) {
        return "часа";
    } else {
        return "часов";
    }
}

export const getDayOfWeek = (i) => {
    switch (i) {
        case 0:
            return 'Воскресенье'
        case 1:
            return 'Понедельник'
        case 2:
            return 'Вторник'
        case 3:
            return 'Среда'
        case 4:
            return 'Четверг'
        case 5:
            return 'Пятница'
        case 6:
            return 'Суббота'
        default:
            return "";
    }
}

export const getCurrMonth = (i) => {
    switch (i) {
        case 0:
            return 'Января'
        case 1:
            return 'Февраля'
        case 2:
            return 'Марта'
        case 3:
            return 'Апреля'
        case 4:
            return 'Мая'
        case 5:
            return 'Июнь'
        case 6:
            return 'Июля'
        case 7:
            return 'Августа'
        case 8:
            return 'Сентября'
        case 9:
            return 'Октября'
        case 10:
            return 'Ноября'
        case 11:
            return 'Декабря'
        default:
            return "";
    }
}


export const tasks = [
    {
        "id": 0,
        "type": "DEPARTURE",
        "agentPointId": 0,
        "agentPointAddress": "ул. Ставропольская, д. 140",
        "creationTime": "2000-01-01",
        "startTime": "12:00",
        "gettingTime": 0,
        "distanceTo": 0,
        "completeTime": 0,
        "employeeId": 0,
        "employeeFullName": "string",
        "order": 0,
        "status": {
            "isCompleted": false,
            "comment": "string"
        }
    },
    {
        "id": 1,
        "type": "DELIVERY",
        "agentPointId": 0,
        "agentPointAddress": "ул. Горького, д. 128",
        "creationTime": "2000-01-01",
        "startTime": "12:00",
        "gettingTime": 0,
        "distanceTo": 0,
        "completeTime": 0,
        "employeeId": 0,
        "employeeFullName": "string",
        "order": 0,
        "status": {
            "isCompleted": false,
            "comment": "string"
        }
    },
    {
        "id": 2,
        "type": "TUITION",
        "agentPointId": 0,
        "agentPointAddress": "ул. Красноармейская, д. 126",
        "creationTime": "2000-01-01",
        "startTime": "12:00",
        "gettingTime": 0,
        "distanceTo": 0,
        "completeTime": 0,
        "employeeId": 0,
        "employeeFullName": "string",
        "order": 0,
        "status": {
            "isCompleted": false,
            "comment": "string"
        }
    },
]

export const assignLogin = (login, password) => {
    return (login === 'admin' || login === 'manager' || login === 'employee1') && password === 'qwerty12';
}