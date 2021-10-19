import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
import { editeTask } from "../Js/Actions/action"
import { useDispatch, useSelector } from "react-redux";
import { React, useEffect, useRef } from "react";
/** component used to edite a task */
const EditeTask = ({ taskId = "" }) => {
    const tasks = useSelector(state => state.filter((el) => el.id === taskId))
    console.log(tasks)
    const [show, setShow] = useState(false);
    const [newTask, setNewTask] = useState({ id: taskId, description: tasks[0].description, isDone: tasks[0].isDone })
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handelAdd = (e) => { e.preventDefault(); setNewTask({ ...newTask, [e.target.name]: e.target.value }) }
    const dispatch = useDispatch();
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current?.focus();
    }, [show]);
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
                    <Form onSubmit={(e) => { e.preventDefault(); dispatch(editeTask(newTask)); handleClose() }}>
                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control ref={inputRef} name="description" defaultValue={tasks[0].description} type="text" placeholder="description" onChange={handelAdd} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => { dispatch(editeTask(newTask)); handleClose() }}>
                        Edite
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default EditeTask;
