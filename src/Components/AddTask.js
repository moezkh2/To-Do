import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
// import { createTask } from "../Js/Actions/action";
// import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { React, useEffect, useRef } from "react";
/** component used to add a new task */
const AddTask = () => {
    // const task = useSelector((state) => state);
    const [tasks, setTasks] = useState([])
    setTasks(JSON.parse(localStorage.getItem("tasks") || "[]")) ;

    const [show, setShow] = useState(false);
    const [newTask, setNewTask] = useState()
    const handleClose = () => setShow(false);
    const handleAddBtn = () => {
        
        // dispatch(createTask({ id: (task.length + 1), ...newTask }));
        tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

        localStorage.setItem("tasks", JSON.stringify([...tasks, { id: (tasks.length + 1), ...newTask }]));
        
        handleClose() 
    
    }
    const handleShow = () => setShow(true);
    const handleAdd = (e) => {
        setNewTask({ ...newTask, [e.target.name]: e.target.value })
        e.preventDefault();
    }
    // const dispatch = useDispatch();
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current?.focus();
        setNewTask({ description: "empty", isDone: false })
    }, [show]);
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
                    <Form onSubmit={(e) => { e.preventDefault(); handleAddBtn() }}>
                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control ref={inputRef} name="description" type="text" placeholder="description" onChange={handleAdd} />
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