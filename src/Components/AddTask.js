import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { React, useEffect, useRef, useContext } from "react";
import { StoregeContext } from "../Context";

const AddTask = () => {
  const { addTasks } = useContext(StoregeContext);
  const [show, setShow] = useState(false);
  const [newTask, setNewTask] = useState();
  const handleClose = () => setShow(false);
  const handleAddBtn = () => {
    addTasks(newTask);

    handleClose();
  };
  const handleShow = () => setShow(true);
  const handleAdd = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
    e.preventDefault();
  };

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current?.focus();
    setNewTask({ description: "empty", isDone: false });
  }, [show]);
  return (
    <>
      <Button variant="warning" onClick={handleShow}>
        <FontAwesomeIcon icon={faPlusSquare} />
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Add a new task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              handleAddBtn();
            }}
          >
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                ref={inputRef}
                name="description"
                type="text"
                placeholder="description"
                onChange={handleAdd}
              />
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
};
export default AddTask;
