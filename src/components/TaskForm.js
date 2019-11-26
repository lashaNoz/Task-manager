import React, { useState, useContext, useEffect } from "react";
import { TaskListContext } from "../contexts/TaskListContext";

const TaskForm = () => {
  const { addTask, clearList, editTask, editableItem } = useContext(
    TaskListContext
  );
  const [title, setTitle] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (editableItem === null) {
      addTask(title);
      setTitle("");
    } else {
      editTask(title, editableItem.id);
    }
  };

  const handleChange = e => {
    setTitle(e.target.value);
  };

  useEffect(() => {
    if (editableItem !== null) {
      setTitle(editableItem.title);
      console.log(editableItem);
    } else {
      setTitle("");
    }
  }, [editableItem]);

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
          value={editableItem ? "Edit Task" : "Add Task"}
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
