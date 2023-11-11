export const agentPointsAPI = {
    /**
    Требуемая роль: ADMIN или MANAGER
    Тело запроса:
    {
      "address": "string",
      "joinTime": "YESTERDAY",
      "materialsDelivered": true,
      "cardIssuanceDaysPassed": 0,
      "approvedAppsCount": 0,
      "issuedCardsCount": 0
    }
    * */
    createAgentPoint(header, body) {
        return fetch('/api/agent_points', {
            method: 'POST',
            headers: header,
            body: body
        })
    },

    /**
     Требуемая роль: ADMIN или MANAGER
     * */
    getAllAgentPoints(header, page, size) {
        return fetch(`/agent_points/all?page=${page}&size=${size}`, {
            method: 'GET',
            headers: header
        })
    },

    // Требуемая роль: ADMIN или MANAGER
    getAgentPointByID(header, id){
        return fetch(`/agent_points/${id}`, {
            method: 'GET',
            headers: header
        })
    },

    updateAgentPointByID(header, id){
        return fetch(`/agent_points/${id}`, {
            method: 'PUT',
            headers: header
        })
    },

    deleteAgentPointsByID(header, id){
        return fetch(`/agent_points/${id}`, {
            method: 'DELETE',
            headers: header
        })
    },
}