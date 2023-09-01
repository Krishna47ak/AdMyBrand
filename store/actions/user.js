import userApi from '../../api/userApi'
import { FETCH_USER } from '../types'


export const fetchUser = () => async dispatch => {
    try {
        const response = await userApi.get('/users')
        dispatch({ type: FETCH_USER, payload: response?.data })
    } catch (err) {
        const errors = err?.response?.data?.errors
        console.error(errors);
    }
}

