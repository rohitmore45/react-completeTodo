import React, { useState } from "react";

export default function AddToDo({ handleAddTodo }) {
  let [todoText, setToDoText] = useState("");

  let handleChange = (e) => {
    setToDoText(e.target.value);
  };
  return (
    <div className="border border-3 p-3 text-center">
      <div>
        <input
          type="text"
          className="form-control"
          onChange={handleChange}
          placeholder="Enter here.."
        />
      </div>
      <button
        className="btn btn-success mt-3 btn-sm"
        onClick={() => handleAddTodo(todoText)}
      >
        Add ToDo
      </button>
    </div>
  );
}
