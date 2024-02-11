import React, { useState } from "react";
import ToDoList from "./ToDoList";
import AddToDo from "./AddToDo";
import Swal from "sweetalert2";

export default function TodoCrud() {
  let initialTodo = [
    { id: 1, text: "To Do 1", completed: false },
    { id: 2, text: "To Do 2", completed: false },
    { id: 3, text: "To Do 3", completed: true },
  ];
  let alertMsg = (msg) => {
    Swal.fire({
      title: msg,
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `,
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `,
      },
    });
  };

  let [todoArr, setToDoArr] = useState(initialTodo);

  let deleteTodo = (id, completed) => {
    let filteredToDos = todoArr.filter((todo) => todo.id !== id);
    completed
      ? setToDoArr([...filteredToDos])
      : alertMsg("Your Todo is not completed..");
  };

  let toggleTodo = (id) => {
    let updatedToDos = todoArr.map((ele) => {
      return ele.id == id ? { ...ele, completed: !ele.completed } : ele;
    });
    setToDoArr([...updatedToDos]);
  };
  let handleAddTodo = (text) => {
    if (text === "") {
      alertMsg("Your task is EMPTY!!");
    } else {
      let newItem = { id: todoArr.length + 1, text: text, completed: false };
      // todoArr.push(newItem);
      let updatedToDos = [...todoArr, newItem];
      setToDoArr([...updatedToDos]);
    }
  };
  return (
    <>
      <h1 className="text-center m-2">ToDo APP</h1>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-7 text-center">
            <h3 className="bg-warning p-2">Todo List</h3>
            <ToDoList
              todoArr={todoArr}
              deleteTodo={deleteTodo}
              toggleTodo={toggleTodo}
            />
          </div>
          <div className="col-sm-5 text-center">
            <h3 className="bg-warning p-2">Add Todo</h3>
            <AddToDo handleAddTodo={handleAddTodo} />
          </div>
        </div>
      </div>
    </>
  );
}
