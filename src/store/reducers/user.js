import { FETCH_USER } from "../types"

const initialState = {
    loading: true,
    users: []
}

export default function (state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        case FETCH_USER:
            return {
                ...state,
                loading: false,
                users: payload
            }
        default:
            return state
    }
}