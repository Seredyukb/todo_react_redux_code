import "./Todo.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useState } from "react";

const Todo = ({ toggleTodo, task, completed, id, removeTodo, updateTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTask, setEditTask] = useState(task);

  const handleUpdate = (e) => {
    e.preventDefault();
    updateTodo(id, editTask);
    setIsEditing(false);
  };
  return (
    <TransitionGroup className={completed ? "Todo completed" : "Todo"}>
      {isEditing ? (
        <CSSTransition key="editing" timeout={500} classNames="form">
          <form className="Todo-edit-form" onSubmit={handleUpdate}>
            <input
              type="text"
              value={editTask}
              name="task"
              onChange={(e) => setEditTask(e.target.value)}
            ></input>
            <button>Save</button>
          </form>
        </CSSTransition>
      ) : (
        <CSSTransition key="normal" timeout={500} classNames="task-text">
          <li className="Todo-task" onClick={toggleTodo}>
            {editTask}
          </li>
        </CSSTransition>
      )}

      <div className="Todo-buttons">
        <button onClick={() => setIsEditing(true)}>
          <i className="fas fa-pen" />
        </button>
        <button onClick={removeTodo}>
          <i className="fas fa-trash" />
        </button>
      </div>
    </TransitionGroup>
  );
};

export default Todo;
