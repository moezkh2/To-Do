import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
import { createTask } from "../Redux/ToDoSlice";
import { useDispatch,useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
/** component used to add a new task */
const AddTask = () => {
    const { task } = useSelector((state) => state);
    const [show, setShow] = useState(false);
    const [newTask, setNewTask] = useState({description: "empty", isDone: "warning" })
    const handleClose = () => setShow(false);
    const handleAddBtn = () => { dispatch(createTask({id:(task.length+1),...newTask})); handleClose() }
    const handleShow = () => setShow(true);
    const handleAdd = (e) => { setNewTask({ ...newTask, [e.target.name]: e.target.value }) }
    const dispatch = useDispatch();
    return (
        <>
            <Button variant='warning' onClick={handleShow}>
                <FontAwesomeIcon icon={faPlusSquare} />
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header >
                    <Modal.Title>Add a new task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control name="description" type="text" placeholder="description" onChange={handleAdd} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleAddBtn}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default AddTask;