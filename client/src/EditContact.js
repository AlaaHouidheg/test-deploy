import { Modal, Button } from "react-bootstrap";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateContacts } from "./JS/Contact/ContactSlice";

export const EditContact = ({ _id, setPing, ping }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [edited, setEdited] = useState({
    title: "",
    description: "",
  });
  const dispatch = useDispatch();
  return (
    <div>
      <Button variant='primary' onClick={handleShow}>
        Edit task
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit task</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ display: "flex", flexDirection: "column" }}>
          <input
            type='text'
            placeholder='edit title'
            onChange={(e) => setEdited({ ...edited, title: e.target.value })}
          />
          <input
            type='text'
            placeholder='edit description'
            onChange={(e) =>
              setEdited({ ...edited, description: e.target.value })
            }
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button
            variant='primary'
            onClick={() => {
              dispatch(updateContacts({ _id, edited }));
              setPing(!ping);
              handleClose();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
