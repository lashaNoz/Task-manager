import React, { useState, useContext, useEffect } from "react";
import { TaskListContext } from "../contexts/TaskListContext";

const TaskForm = () => {
  const { addTask, clearList, editTask, editItem } = useContext(
    TaskListContext
  );
  const [title, setTitle] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (editItem === null) {
      addTask(title);
      setTitle("");
    } else {
      editTask(title, editItem.id);
    }
  };

  const handleChange = e => {
    setTitle(e.target.value);
  };

  useEffect(() => {
    if (editItem !== null) {
      setTitle(editItem.title);
      console.log(editItem);
    } else {
      setTitle("");
    }
  }, [editItem]);

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Add Task..."
        value={title}
        onChange={handleChange}
        required
        className="task-input"
      />
      <div className="buttons">
        <input
          type="submit"
          value={editItem ? "Edit Task" : "Add Task"}
          className="btn task-btn"
        />
        <button className="btn clear-btn" onClick={clearList}>
          Clear
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
