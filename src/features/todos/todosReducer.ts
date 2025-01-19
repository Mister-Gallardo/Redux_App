import { ITodosState, TodoActionTypes } from "./todosTypes";

const initialState: ITodosState = {
  todos: [],
  loading: false,
};

const todosReducer = (state = initialState, action: TodoActionTypes): ITodosState => {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, todos: [...state.todos, action.payload] };
    case "FETCH_TODOS_REQUEST":
      return { ...state, loading: true };
    case "FETCH_TODOS_SUCCESS":
      return { todos: action.payload, loading: false };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    default:
      return state;
  }
};

export default todosReducer;
