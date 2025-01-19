import { combineReducers } from "redux";
import todosReducer from "../features/todos/todosReducer";
import usersReducer from "../features/users/userReducer";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    todos: todosReducer,
    users: usersReducer
});

export const store = configureStore({reducer: rootReducer});

export type RootState = ReturnType<typeof rootReducer>;