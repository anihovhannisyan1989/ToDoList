import "./TodosList.css";
import React from "react";
import ToDoLine from "../ToDoLine/ToDoLine";

const TodosList = ({ todos, edit, remove }) => {
  return (
    <div className="todosList">
      {todos.map((todo) => {
        return (
          <ToDoLine key={todo.id} todo={todo} edit={edit} remove={remove} />
        );
      })}
    </div>
  );
};

export default TodosList;
