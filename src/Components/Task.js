import { Button, Card } from "react-bootstrap";
import EditeTask from "./EditeTask";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardCheck,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { StoregeContext } from "../Context";
import { useContext } from "react";

const Task = ({ task }) => {
  const { doneTasks, removeTasks, tasks } = useContext(StoregeContext);
  return (
    <Card
      bg={task.isDone ? "success" : "warning"}
      style={{ width: "18rem" }}
      className="task"
    >
      <Card.Header style={{ display: "flex" }}>
        {`task: ${task.id}`}
        <div style={{ marginLeft: "auto" }}>
          <Button
            style={{ marginRight: "3px" }}
            variant="outline-primary"
            onClick={() => {
              removeTasks(task);
            }}
          >
            <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
          </Button>
          <EditeTask taskId={task.id}></EditeTask>
          <Button
            style={{ marginLeft: "3px" }}
            variant="outline-primary"
            onClick={() => {
              doneTasks(task);
            }}
          >
            <FontAwesomeIcon icon={faClipboardCheck}></FontAwesomeIcon>
          </Button>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title> {moment(new Date()).format("DD/MM/YYYY")} </Card.Title>
        <Card.Text>{task.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};
export default Task;
