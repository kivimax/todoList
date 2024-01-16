import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import InputField from "./components/ImputField";
import { useDispatch } from "react-redux";
import { addTodo } from "./store/todoSlice";

function App() {
  const [text, setText] = React.useState("");

  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo({ text }));
    setText("");
  };

  return (
    <div className="App">
      <InputField text={text} hendelInput={setText} addInput={addTask} />
      <TodoList />
    </div>
  );
}

export default App;
