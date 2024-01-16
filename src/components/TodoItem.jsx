import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo, toggleTextCompleted } from "../store/todoSlice";

const TodoItem = ({ text, id, completed }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleTextCompleted({ id }))}
      />
      <span
        style={{
          textDecoration: completed ? "line-through" : "none",
        }}
      >
        {text}
      </span>
      <button onClick={() => dispatch(removeTodo({ id }))}>Delete</button>
    </li>
  );
};

export default TodoItem;
