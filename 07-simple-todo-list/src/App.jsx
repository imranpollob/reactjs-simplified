import { useState } from "react";
import Todo from "./Todo";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    const input = document.getElementById("todo-input");
    const newTodo = input.value;
    if (newTodo) {
      setTodos([newTodo, ...todos]);
      input.value = "";
    }
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <>
      <ul id="list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} deleteTodo={deleteTodo} />
        ))}
      </ul>

      <div id="new-todo-form">
        <label htmlFor="todo-input">New Todo</label>
        <input type="text" id="todo-input" />
        <button onClick={addTodo}>Add Todo</button>
      </div>
    </>
  );
}

export default App;
