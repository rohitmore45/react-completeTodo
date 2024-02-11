import React, { useState } from "react";
import ToDoList from "./ToDoList";
import AddToDo from "./AddToDo";
import Swal from "sweetalert2";
import WelcomeMsg from "./WelcomeMsg";

export default function TodoCrud() {
  // let initialTodo = [
  //   { id: 1, text: "To Do 1", completed: false, date: "2024-02-25" },
  //   { id: 2, text: "To Do 2", completed: false, date: "2024-02-12" },
  //   { id: 3, text: "To Do 3", completed: true, date: "2024-02-05" },
  // ];
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

  let [todoArr, setToDoArr] = useState("");

  let deleteTodo = (id, completed) => {
    let filteredToDos = todoArr.filter((todo) => todo.id !== id);
    completed
      ? setToDoArr([...filteredToDos])
      : alertMsg("Your Task is not completed..");
  };

  let toggleTodo = (id) => {
    let updatedToDos = todoArr.map((ele) => {
      return ele.id == id ? { ...ele, completed: !ele.completed } : ele;
    });
    setToDoArr([...updatedToDos]);
  };
  let handleAddTodo = (text, date) => {
    if (text === "" || date === "") {
      alertMsg("Your task is EMPTY!!");
    } else {
      let newItem = {
        id: todoArr.length + 1,
        text: text,
        completed: false,
        date: date,
      };
      text = "";
      date = "";
      // todoArr.push(newItem);
      let updatedToDos = [...todoArr, newItem];
      setToDoArr([...updatedToDos]);
    }
  };
  return (
    <>
      <h1 className="text-center m-2">ToDo APP</h1>
      <div className="container-fluid  rounded rounded-4 p-4">
        <div className="row">
          <div className="col-sm-7 text-center">
            <h3
              style={{ backgroundColor: "#e67e22" }}
              className=" p-2 rounded rounded-3 "
            >
              Todo List
            </h3>
            <WelcomeMsg todoArr={todoArr} />
            <ToDoList
              todoArr={todoArr}
              deleteTodo={deleteTodo}
              toggleTodo={toggleTodo}
            />
          </div>
          <div className="col-sm-5 text-center">
            <h3
              style={{ backgroundColor: "#e67e22" }}
              className=" p-2 rounded rounded-3"
            >
              Add Todo
            </h3>
            <AddToDo handleAddTodo={handleAddTodo} />
          </div>
        </div>
      </div>
    </>
  );
}
