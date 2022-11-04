import { useState } from "react";
import "./TodoInput.css";

const TodoInput = ({ createTodo }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo(task);
    setTask("");
  };

  return (
    <form className="TodoInput" onSubmit={handleSubmit}>
      <input
        placeholder="type new task"
        type="text"
        value={task}
        name="task"
        id="task"
        onChange={(e) => setTask(e.target.value)}
      ></input>
      <button>Add TODO</button>
    </form>
  );
};

export default TodoInput;
