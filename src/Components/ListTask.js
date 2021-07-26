import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import { useState } from "react";
import Task from "./Task"
import { useSelector } from 'react-redux';
import AddTask from "./AddTask";
/** component used to show tasks' list */
const ListTask = () => {
    const { task } = useSelector((state) => state);
    const [filter, setFilter] = useState("all")
    return (
        <div>
            <div align="center" style={{ margin: "30px" }}>
                <ToggleButtonGroup name="options" value={filter} onChange={(value) => { setFilter(value) }}>
                    <ToggleButton variant='outline-primary' value="all" > All</ToggleButton>
                    <ToggleButton variant='outline-warning' value="success" > Arogress</ToggleButton>
                    <ToggleButton variant='outline-success' value="warning" > Done</ToggleButton>
                </ToggleButtonGroup>
            </div>
            <div className="listTask" align="center" >
                {task.filter((ele) => { return ele.isDone !== filter }).map((el,index) => { return <Task key={index} task={el}></Task> })}
            </div>
            <div align="center">
                <AddTask></AddTask>
            </div>
        </div >
    );
}
export default ListTask;