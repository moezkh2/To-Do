import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import { useState } from "react";
import Task from "../Components/Task"
// import { useSelector } from 'react-redux';
import AddTask from "./AddTask";
/** component used to show tasks' list */
import React from 'react'

const ListTask = () => {
    // const tasks = useSelector((state) => state);
    const [tasks, setTasks] = useState([])
    setTasks(JSON.parse(localStorage.getItem("tasks") || "[]")) ;
    
    

    const [filter, setFilter] = useState("all")

    return (
        <div>
            <div align="center" style={{ margin: "30px" }}>
                <ToggleButtonGroup name="options" value={filter} onChange={(value) => { setFilter(value) }}>
                    <ToggleButton variant='outline-primary' value="all" > All</ToggleButton>
                    <ToggleButton variant='outline-warning' value={true} > Arogress</ToggleButton>
                    <ToggleButton variant='outline-success' value={false} > Done</ToggleButton>
                </ToggleButtonGroup>
            </div>

            {tasks.length === 0 ? <div align="center"> <h2 style={{ margin: "50px", color: "#20527c" }}>You don't have any tasks yet !!</h2></div> :
                <div className="listTask" align="center" >
                    {tasks.filter((ele) => { return ele.isDone !== filter }).map((el, index) => { return <Task key={index} task={el}></Task> })}
                </div>
            }


            <div align="center">
                <AddTask></AddTask>
            </div>
        </div >
    );
}
export default ListTask;