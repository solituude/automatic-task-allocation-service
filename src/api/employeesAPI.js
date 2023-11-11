export const employeesAPI = {
    // получение списка всех сотрудников (MANAGER)
    getAllEmployees(header, page, size) {
        return fetch(`/api/employees/all?page=${page}&size=${size}`,{
            method: 'GET',
            headers: header
        })
    },
    // получение текущего сотрудника (EMPLOYEE)
    getCurrentEmployee(header) {
        return fetch(`/employees/current`,{
            method: 'GET',
            headers: header
        })
    },

    // получение сотрудника по айди аккаунта (MANAGER)
    getEmployeeByID(header, id){
        return fetch(`/employees/${id}`,{
            method: 'GET',
            headers: header
        })
    }
}