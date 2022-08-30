import "./TodosHeader.css";
import React from "react";
import { useState } from "react";

const TodosHeader = ({ addTodo }) => {
  const [value, setValue] = useState("");
  return (
    <form
      className="header-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        if (value && value.trim() !== "") addTodo(value.trim());
        setValue("");
      }}
    >
      <input
        type="text"
        placeholder="New ToDo..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};

export default TodosHeader;
