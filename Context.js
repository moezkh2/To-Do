import { createContext, useState } from "react";

const StoregeContext = createContext();

const ContextProvider = ({ children }) => {

    const [tasks, setTasks] = useState(null);

    const getTascks=()=>{
        setTasks(JSON.parse(localStorage.getItem("tasks") || "[]")) ;
 }

 const AddTasks=(tasks)=>{
    localStorage.setItem("tasks", JSON.stringify([...tasks, { id: (tasks.length + 1), ...newTask }]));
 };

 const RemoveTasks=(tasks)=>{

    let newTasks =tasks.filter((el) => el.id !== task.id)
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  const editeTasks =(newTask)=>{
    localStorage.setItem("tasks", JSON.stringify(newTask));
  }

  const doneTasks=()=>{
  
  let newTasks =tasks.map((el) => { return el.id === task.id ? { ...el, isDone: !el.isDone } : el })
  localStorage.setItem("tasks", JSON.stringify(newTasks));
  }


    

    
    return (
        <StoregeContext.Provider value={{
            
            storege,
            setStorege 
            }}>

            {children}
        </StoregeContext.Provider>
    )
}


