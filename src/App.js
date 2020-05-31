import React from "react";
import TodoInput from "./components/Input";
import TodoList from "./components/TodoList";

import "./App.css";

function App() {
  return (
    <div>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
