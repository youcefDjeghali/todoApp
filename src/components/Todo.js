import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { AiOutlineClose } from "react-icons/ai";
import { AiTwotoneEdit } from "react-icons/ai";

function Todo({ tasks, completeTodo, removeTodo, editTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitEdit = (value) => {
    editTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };
  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitEdit} />;
  }

  return tasks.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <AiOutlineClose
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
        <AiTwotoneEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit-icon"
        />
      </div>
    </div>
  ));
}
export default Todo;
