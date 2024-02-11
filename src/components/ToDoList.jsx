import React from "react";

export default function ToDoList({ todoArr, deleteTodo, toggleTodo }) {
  return (
    <table className="table table-bordered table-striped  text-center table-sm">
      <tbody>
        {todoArr.length === 0 ? (
          ""
        ) : (
          <tr className="fw-bolder">
            {/* <td>No.</td> */}
            <td>Task</td>
            <td>Date</td>
            <td>Status</td>
            <td>Other</td>
          </tr>
        )}

        {todoArr &&
          todoArr.map((todo) => {
            return (
              <>
                <tr key={todo.id} className="fw-medium">
                  {/* <td>{todo.id}]</td> */}
                  <td
                    className="w-50"
                    style={{
                      textDecoration: todo.completed ? "line-through" : "",
                      color: todo.completed ? "green" : "",
                    }}
                  >
                    {todo.text}
                  </td>
                  <td
                    style={{ color: todo.completed ? "green" : "" }}
                    className={` ${
                      todo.completed ? "text-decoration-line-through" : ""
                    }
                `}
                  >
                    {todo.date}
                  </td>
                  <td
                    style={{ color: todo.completed ? "green" : "brown" }}
                    className={`fw-bold  fs-4 ${
                      todo.completed
                        ? "bi bi-check2-circle"
                        : "bi bi-exclamation-circle"
                    }`}
                  ></td>
                  <td className="">
                    <button
                      className={`btn ${
                        todo.completed ? "btn-success" : "btn-info"
                      }  btn-sm`}
                      onClick={() => toggleTodo(todo.id)}
                    >
                      {todo.completed ? "Not yet" : "Done"}
                    </button>
                    <button
                      className="btn btn-danger m-2 btn-sm"
                      onClick={() => deleteTodo(todo.id, todo.completed)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
      </tbody>
    </table>
  );
}
