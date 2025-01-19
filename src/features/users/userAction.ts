import { Dispatch } from "redux"
import { IUser } from "./userTypes"
import axios from "axios"

export const addUserAction = (user: IUser) => ({
    type: 'ADD_USER',
    payload: user
})

const fetchUsersRequest = () => ({
    type: 'FETCH_USERS_REQUEST',
})

const fetchUsersSuccess = (users: IUser[]) => ({
    type: 'FETCH_USERS_SUCCESS',
    payload: users
})

export const removeUser = (id: number) => ({
    type: 'REMOVE_USER', 
    payload: id
})

export const fetchUsers = () => {
    return async (dispatch: Dispatch) => {
        dispatch(fetchUsersRequest());
        const { data } = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
        dispatch(fetchUsersSuccess(data))
    }
}