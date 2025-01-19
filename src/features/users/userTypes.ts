export interface IUser {
    id: number,
    name: string
};

export interface IUsersState {
    users: IUser[],
    loading: boolean
} 

interface IAddUserAction {
    type: 'ADD_USER',
    payload: IUser
}

interface IFetchUsersRequestAction {
    type: 'FETCH_USERS_REQUEST'
};

interface IFetchUsersSuccessAction {
    type: 'FETCH_USERS_SUCCESS',
    payload: IUser[]
}

interface IRemoveUser {
    type: 'REMOVE_USER',
    payload: number
}

export type UsersActionTypes = IAddUserAction | IFetchUsersRequestAction | IFetchUsersSuccessAction | IRemoveUser;