import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, Button, Form } from "react-bootstrap";
import { useState, useContext } from "react";
import { StoregeContext } from "../Context";

import { React, useEffect, useRef } from "react";

/** component used to edite a task */
const EditeTask = ({ taskId = "" }) => {
  const { editeTasks, tasks } = useContext(StoregeContext);

  const [show, setShow] = useState(false);
  const [newTask, setNewTask] = useState({
    id: taskId,
    description: tasks[0].description,
    isDone: tasks[0].isDone,
  });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handelAdd = (e) => {
    e.preventDefault();
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [show]);
  return (
    <>
      <Button variant="outline-primary" onClick={handleShow}>
        <FontAwesomeIcon icon={faEdit} />
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Edite task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              editeTasks(newTask);
              handleClose();
            }}
          >
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                ref={inputRef}
                name="description"
                defaultValue={tasks[0].description}
                type="text"
                placeholder="description"
                onChange={handelAdd}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              editeTasks(newTask);
              handleClose();
            }}
          >
            Edite
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default EditeTask;
