interface IAddTodo {
    type: 'ADD_TODO',
    payload: ITodo
}

interface IFetchTodosRequestAction {
    type: 'FETCH_TODOS_REQUEST'
}

interface IFetchTodosSuccessAction {
    type: 'FETCH_TODOS_SUCCESS',
    payload: ITodo[];
}

interface IToggleTodoAction {
    type: 'TOGGLE_TODO',
    payload: number
}

export type TodoActionTypes = IAddTodo | IFetchTodosRequestAction | IFetchTodosSuccessAction | IToggleTodoAction;

export interface ITodo {
    id: number,
    title: string,
    completed: boolean
}

export interface ITodosState {
    todos: ITodo[],
    loading: boolean
}