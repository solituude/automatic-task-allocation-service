export const accountsAPI = {
    /**
     * требуемая роль: админ, менеджер
     * Также метод доступен, если id текущего пользователя равен запрашиваемому id
     */
    getAccount(header, id) {
        return fetch(`/accounts/${id}`, {
            method: 'GET',
            headers: header
        })
    },

    /**
     * Требуемая роль: ADMIN или MANAGER.
     * Также метод доступен, если логин текущего пользователя равен запрашиваемому логину
     * */
    getAccountByLogin(header, login) {
        return fetch(`/api/accounts/login/${login}`, {
            method: 'GET',
            headers: header
        })
    },
}