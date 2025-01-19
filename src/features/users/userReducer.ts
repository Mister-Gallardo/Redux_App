import { IUsersState, UsersActionTypes } from "./userTypes";

const initialState: IUsersState = {
  users: [],
  loading: false,
};

const usersReducer = (state = initialState, action: UsersActionTypes): IUsersState => {
  switch (action.type) {
    case "ADD_USER":
      return { ...state, users: [...state.users, action.payload] };
    case "FETCH_USERS_REQUEST":
      return { ...state, loading: true };
    case "FETCH_USERS_SUCCESS":
      return { users: action.payload, loading: false };
    case "REMOVE_USER":
        return { ...state, users: state.users.filter(user => user.id !== action.payload) }
    default:
      return state;
  }
};

export default usersReducer;
