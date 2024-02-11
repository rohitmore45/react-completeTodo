import React from "react";

export default function ToDoList({ todoArr, deleteTodo, toggleTodo }) {
  return (
    <table className="table table-bordered table-striped fw-bolder text-center table-sm">
      <tbody>
        {todoArr.map((todo) => {
          return (
            <tr key={todo.id}>
              <td>{todo.id}]</td>
              <td
                style={{
                  textDecoration: todo.completed ? "line-through" : "",
                  color: todo.completed ? "green" : "",
                }}
              >
                {todo.text}
              </td>
              <td
                style={{ color: todo.completed ? "green" : "" }}
                className="w-25"
              >
                {todo.completed ? "Completed.." : "Complete It!"}
              </td>
              <td className="w-25">
                <button
                  className={`btn ${
                    todo.completed ? "btn-success" : "btn-info"
                  }  btn-sm`}
                  onClick={() => toggleTodo(todo.id)}
                >
                  {todo.completed ? "Not yet" : "Complete"}
                </button>
                <button
                  className="btn btn-danger m-2 btn-sm"
                  onClick={() => deleteTodo(todo.id, todo.completed)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
