import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
const BootSt = ({ name, ...props }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const options = [
    {
      name: "Enable backdrop (default)",
      scroll: false,
      backdrop: true,
    },
    {
      name: "Disable backdrop",
      scroll: false,
      backdrop: false,
    },
    {
      name: "Enable body scrolling",
      scroll: true,
      backdrop: false,
    },
    {
      name: "Enable both scrolling & backdrop",
      scroll: true,
      backdrop: true,
    },
  ];

  const toggleShow = () => setShow((s) => !s);

  return (
    <div>
      {" "}
      <Button variant="primary" onClick={toggleShow} className="me-2">
        LaunCh
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
      <>
        What is React-Bootstrap for? React-Bootstrap takes the CSS framework of
        Bootstrap and replaces any existing JavaScript with strictly React
        components. This means you no longer need jQuery or other dependencies
        to alter JavaScript elements.26-Oct-2022What is React-Bootstrap for?
        React-Bootstrap takes the CSS framework of Bootstrap and replaces any
        existing JavaScript with strictly React components. This means you no
        longer need jQuery or other dependencies to alter JavaScript
        elements.26-Oct-2022
      </>
    </div>
  );
};

export default BootSt;
