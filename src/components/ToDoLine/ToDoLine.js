import "./ToDoLine.css";
import React, { useState } from "react";
import { GoTrashcan } from "react-icons/go";
import { GrEdit } from "react-icons/gr";
import { FaRegSave } from "react-icons/fa";

const ToDoLine = ({ todo, edit, remove }) => {
  const [title, setTitle] = useState(todo.title);
  const [focus, setFocus] = useState(false);
  return (
    <div className="todo-item">
      <input
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          setFocus(true);
        }}
      />
      <button
        onClick={() => {
          edit(title, todo.id);
          setFocus(false);
        }}
      >
        {focus ? <FaRegSave /> : <GrEdit />}
      </button>
      <button
        className="icon"
        onClick={() => {
          if (window.confirm("Are you sure ?")) remove(todo);
        }}
      >
        <GoTrashcan />
      </button>
    </div>
  );
};

export default ToDoLine;
