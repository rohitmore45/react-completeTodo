import React, { useRef, useState } from "react";

export default function AddToDo({ handleAddTodo }) {
  // let [todoText, setToDoText] = useState("");
  // let [todoDate, setTodoDate] = useState("");

  // let handleChange = (e) => {
  //   setToDoText(e.target.value);
  // };
  // let handleDate = (e) => {
  //   setTodoDate(e.target.value);
  // };

  let todoText = useRef("");
  let todoDate = useRef("");

  let handleAddBtn = () => {
    const todoName = todoText.current.value;
    const todoDueDate = todoDate.current.value;
    todoText.current.value = "";
    todoDate.current.value = "";
    handleAddTodo(todoName, todoDueDate);

    // setToDoText("");
    // setTodoDate("");
  };

  return (
    <div className="border border-3 rounded rounded-3 p-3">
      <div className="input-group">
        <input
          type="text"
          className="input-group-text w-50 text-start border-2 border-black"
          // onChange={handleChange}
          placeholder="Enter here.."
          // value={todoText}
          ref={todoText}
        />
        <input
          type="date"
          // onChange={handleDate}
          // value={todoDate}
          ref={todoDate}
          className="input-group-text w-50 text-start border-2 border-black"
        />
      </div>
      <div></div>
      <button className="btn btn-success mt-3 btn-sm" onClick={handleAddBtn}>
        Add-Task
      </button>
    </div>
  );
}
