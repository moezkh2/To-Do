import { Button, Card } from 'react-bootstrap'
// import { useDispatch } from 'react-redux';
// import { doneTask, deleteTask} from "../Js/Actions/action"
import EditeTask from './EditeTask';
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardCheck,faTrashAlt } from '@fortawesome/free-solid-svg-icons';
/** component used to fill task card with data from the store */
const doneTask = (task) => {
  let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  
  let newTasks =tasks.map((el) => { return el.id === task.id ? { ...el, isDone: !el.isDone } : el })
  localStorage.setItem("tasks", JSON.stringify(newTasks));
}

const deleteTask = (task) => {
  let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  
  let newTasks =tasks.filter((el) => el.id !== task.id)
  localStorage.setItem("tasks", JSON.stringify(newTasks));
}

const Task = ({ task }) => {
  // const dispatch = useDispatch();
  
  return (
    <Card
      bg={task.isDone? "success":"warning"}
      style={{ width: '18rem' }}
      className="task"
    >
      <Card.Header style={{ display: "flex" }}>
        {`task: ${task.id}`}
        <div style={{ marginLeft: "auto" }}>
          <Button style={{ marginRight: "3px" }} variant='outline-primary' onClick={() => {deleteTask(task)}}>
            <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
          </Button>
          <EditeTask taskId={task.id}></EditeTask>
          <Button style={{ marginLeft: "3px" }} variant='outline-primary' onClick={() => { doneTask(task) }}>
            <FontAwesomeIcon icon={faClipboardCheck}></FontAwesomeIcon>
          </Button>
        </div>

      </Card.Header>
      <Card.Body>
        <Card.Title> {moment(new Date()).format("DD/MM/YYYY")} </Card.Title>
        <Card.Text>
          {task.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
export default Task;

