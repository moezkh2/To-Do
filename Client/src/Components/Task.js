import { Button, Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { doneTask, deleteTask} from "../Js/Actions/action"
import EditeTask from './EditeTask';
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardCheck,faTrashAlt } from '@fortawesome/free-solid-svg-icons';
/** component used to fill task card with data from the store */
const Task = ({ task }) => {
  const dispatch = useDispatch();
  return (
    <Card
      bg={task.isDone? "success":"warning"}
      style={{ width: '18rem' }}
      className="task"
    >
      <Card.Header style={{ display: "flex" }}>
        {`task: ${task.id}`}
        <div style={{ marginLeft: "auto" }}>
          <Button style={{ marginRight: "3px" }} variant='outline-primary' onClick={() => {dispatch(deleteTask(task))}}>
            <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
          </Button>
          <EditeTask taskId={task.id}></EditeTask>
          <Button style={{ marginLeft: "3px" }} variant='outline-primary' onClick={() => { dispatch(doneTask(task)) }}>
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

