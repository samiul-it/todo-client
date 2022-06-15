import React, { useRef, useState } from "react";
import { toast } from "react-toastify";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";


const Task = ({ task, refetch }) => {
  console.log(task);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const descriptionUpdateRef=useRef();

  // Deleting a Task

  const handleDeleteItem = (id) => {
    const confirmDelete = window.confirm("Are you Sure?");
    if (confirmDelete) {
      const url = `http://localhost:5000/deletetask/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          toast.info("Item Deleted");
          refetch();
        });
    }
  };

  // Updating Task Description

  const handleDescriptionUpdate=(e,id)=>{

    e.preventDefault();



    const descriptionUpdate=descriptionUpdateRef.current.value;
   

    const url = `http://localhost:5000/task/${id}`;

    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({descriptionUpdate}),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        handleClose();
        refetch();
      })
      .then(toast.success("Success!Task Updated"));
    
  }

  return (
    <div>
      <div className="alert alert-primary" role="alert">
        <h5>{task.name}</h5>
        <p>{task.description}</p>
        <button onClick={handleShow}>Edit</button>
        <button onClick={() => handleDeleteItem(task._id)}>X</button>
      </div>

      {/* Edit Modal */}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{task.name}</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleDescriptionUpdate}>
          <Modal.Body>
            <div className="input-group">
              <div className="input-group-prepend"></div>
              <textarea
                ref={descriptionUpdateRef}
                className="form-control"
                aria-label="With textarea"
                defaultValue={task.description}
              ></textarea>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={(e)=>handleDescriptionUpdate(e,task._id)}>Update</Button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
};

export default Task;
