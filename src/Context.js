import { createContext, useState, useEffect } from "react";

const StoregeContext = createContext();

const ContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    console.log("useEffect context");
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const getTasks = () => {
    setTasks(JSON.parse(localStorage.getItem("tasks") || "[]"));
  };

  const addTasks = (newTask) => {
    setTasks([...tasks, { id: tasks.length + 1, ...newTask }]);
  };

  const removeTasks = (task) => {
    let newTasks = tasks.filter((el) => el.id !== task.id);
    setTasks(newTasks);
  };

  const editeTasks = (newTask) => {
    let newTasks = tasks.map((el) => {
      return el.id === newTask.id
        ? { ...el, description: newTask.description }
        : el;
    });
    setTasks(newTasks);
  };

  const doneTasks = (task) => {
    let newTasks = tasks.map((el) => {
      return el.id === task.id ? { ...el, isDone: !el.isDone } : el;
    });
    setTasks(newTasks);
  };

  return (
    <StoregeContext.Provider
      value={{
        tasks,
        getTasks,
        addTasks,
        removeTasks,
        editeTasks,
        doneTasks,
      }}
    >
      {children}
    </StoregeContext.Provider>
  );
};

export { StoregeContext, ContextProvider };
