import { Dispatch } from "redux"
import { ITodo } from "./todosTypes"
import axios from "axios"

export const addTodoAction = (todo: ITodo) => ({
    type: "ADD_TODO",
    payload: todo
})

const fetchTodosRequest = () => ({
    type: 'FETCH_TODOS_REQUEST'
})

const fetchTodosSuccess = (todos: ITodo[]) => ({
    type: 'FETCH_TODOS_SUCCESS',
    payload: todos
})

export const toggleTodo = (id: number) => ({
    type: 'TOGGLE_TODO',
    payload: id
})

export const fetchTodos = () => {
    return async (dispatch: Dispatch) => {
        dispatch(fetchTodosRequest());
        const { data } = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos');
        dispatch(fetchTodosSuccess(data.slice(0, 10)));
    }
};