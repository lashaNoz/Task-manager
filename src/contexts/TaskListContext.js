import React, { createContext, useState } from "react";
import uuid from "uuid";

export const TaskListContext = createContext();

const TaskListContextProvider = props => {
  const initialState = JSON.parse(localStorage.getItem("tasks"));

  const [tasks, setTasks] = useState(initialState || []);

  const [editItem, setEditItem] = useState(null);

  // Add tasks
  const addTask = title => {
    // JSON.parse(localStorage.getItem("tasks"));
    setTasks([...tasks, { title, id: uuid() }]);
    // localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  // Remove tasks
  const removeTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Clear tasks
  const clearList = () => {
    setTasks([]);
  };

  // Find task
  const findItem = id => {
    const item = tasks.find(task => task.id === id);

    setEditItem(item);
  };

  // Edit task
  const editTask = (title, id) => {
    const newTasks = tasks.map(task => (task.id === id ? { title, id } : task));

    console.log(newTasks);

    setTasks(newTasks);
    setEditItem(null);
  };

  return (
    <TaskListContext.Provider
      value={{
        tasks,
        addTask,
        removeTask,
        clearList,
        findItem,
        editTask,
        editItem
      }}
    >
      {props.children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
