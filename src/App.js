import "./App.css";
import React, { useState } from "react";
import TodosHeader from "./components/TodosHeader/TodosHeader";
import TodosList from "./components/TodosList/TodosList";

const App = () => {
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TodosHeader
        addTodo={(value) => {
          if (
            todos.filter(
              (obj) => obj.title.toLowerCase() === value.toLowerCase()
            ).length
          )
            window.alert("Duplicate !!!");
          else {
            setTodos([...todos, { id: new Date() % 1000, title: value }]);
          }
        }}
      />
      <TodosList
        todos={todos}
        edit={(text, id) =>
          setTodos(
            todos.map((item) =>
              id === item.id
                ? { id: item.id, title: text, complited: item.complited }
                : item
            )
          )
        }
        remove={(todo) => setTodos(todos.filter((item) => item.id !== todo.id))}
      />
    </div>
  );
};

export default App;
