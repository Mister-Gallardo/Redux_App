import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import {
  addTodoAction,
  fetchTodos,
  toggleTodo,
} from "../features/todos/todosActions";
import { ITodo } from "../features/todos/todosTypes";

const TodoList: React.FC = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const { todos, loading } = useSelector((state: RootState) => state.todos);

  useEffect(() => {
    dispatch(fetchTodos() as any);
  }, [dispatch]);

  const handdleAddTodo = () => {
    if (!value) {
      alert("Введите значение!");
      return;
    }
    const todo: ITodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };
    dispatch(addTodoAction(todo));
    setValue("");
  };

  const handdleToggle = (id: number) => {
    dispatch(toggleTodo(id));
  };

  if (loading) return <h2>Loading...</h2>;

  return (
    <div>
      <h2>Todo List</h2>
      <input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        placeholder="Введите задачу..."
      />
      <button onClick={handdleAddTodo}>Добавить</button>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => handdleToggle(todo.id)}
            style={{ fontSize: 20 }}
          >
            {todo.title} - {todo.completed ? "Completed" : "Pending"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
