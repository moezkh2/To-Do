import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import { useState, useContext, useEffect } from "react";
import Task from "../Components/Task";
import { StoregeContext } from "../Context";
import AddTask from "./AddTask";

import React from "react";

const ListTask = () => {
  const { getTasks, tasks } = useContext(StoregeContext);

  const [filter, setFilter] = useState("all");

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div>
      <div align="center" style={{ margin: "30px" }}>
        <ToggleButtonGroup
          name="options"
          value={filter}
          onChange={(value) => {
            setFilter(value);
          }}
        >
          <ToggleButton variant="outline-primary" value="all">
            {" "}
            All
          </ToggleButton>
          <ToggleButton variant="outline-warning" value={true}>
            {" "}
            Arogress
          </ToggleButton>
          <ToggleButton variant="outline-success" value={false}>
            {" "}
            Done
          </ToggleButton>
        </ToggleButtonGroup>
      </div>

      {tasks.length === 0 ? (
        <div align="center">
          {" "}
          <h2 style={{ margin: "50px", color: "#20527c" }}>
            You don't have any tasks yet !!
          </h2>
        </div>
      ) : (
        <div className="listTask" align="center">
          {tasks
            .filter((ele) => {
              return ele.isDone !== filter;
            })
            .map((el, index) => {
              return <Task key={index} task={el}></Task>;
            })}
        </div>
      )}

      <div align="center">
        <AddTask></AddTask>
      </div>
    </div>
  );
};
export default ListTask;
