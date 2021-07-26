import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
import { editeTask } from "../Redux/ToDoSlice"
import { useDispatch } from "react-redux";
/** component used to edite a task */
const EditeTask = ({ taskId = "" }) => {
    const [show, setShow] = useState(false);
    const [newTask, setNewTask] = useState({ id: taskId, description: "emty", isDone: "warning" })
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handelAdd = (e) => { setNewTask({ ...newTask, [e.target.name]: e.target.value }) }
    const dispatch = useDispatch();
    return (
        <>
            <Button variant='outline-primary' onClick={handleShow}>
                <FontAwesomeIcon icon={faEdit} />
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header >
                    <Modal.Title>Edite task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control name="description" type="text" placeholder="description" onChange={handelAdd} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => { dispatch(editeTask(newTask));handleClose() }}>
                        Edite
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default EditeTask;
