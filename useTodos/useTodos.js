import { useReducer, useEffect } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const initialState = [
  {
    id: 1,
    description: "Recolectar la piedra del alma",
    done: false,
  },
  {
    id: 2,
    description: "Recolectar la piedra del sueño",
    done: true,
  },
  {
    id: 3,
    description: "Recolectar la piedra del poder",
    done: false,
  },
];

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || initialState;
};

export const useTodos = (initialState = []) => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos) || []);
  }, [todos]);

  const todosCount = todos.length

  const todosPendingCount = todos.filter(todo => !todo.done).length

  const handleNewTodo = (todo) => {
    const action = {
      type: "Add Todo",
      payload: todo,
    };

    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    dispatch({
      type: "Del Todo",
      payload: id,
    });
  };

  const handleToggleTodo = (id, bool) => {
    dispatch({
      type: "Toggle Todo",
      payload: { id, bool },
    });
  };

  return {
    todos,
    todosCount,
    todosPendingCount,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  };
};
