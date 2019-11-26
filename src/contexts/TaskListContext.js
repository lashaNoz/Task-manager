import React, { createContext, useState } from "react";
import uuid from "uuid";

export const TaskListContext = createContext();

const TaskListContextProvider = props => {
  const [tasks, setTasks] = useState([]);

  const [editableItem, setEditableItem] = useState(null);

  // Add tasks
  const addTask = title => {
    setTasks([...tasks, { title, id: uuid() }]);
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

    setEditableItem(item);
  };

  // Edit task
  const editTask = (title, id) => {
    const newTasks = tasks.map(task => (task.id === id ? { title, id } : task));

    console.log(newTasks);

    setTasks(newTasks);
    setEditableItem(null);
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
        editableItem
      }}
    >
      {props.children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
