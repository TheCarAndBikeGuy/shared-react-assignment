"use client";
import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function OffCanvas() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="offcanvas">
        <Button className="button" variant="primary" onClick={handleShow}>
          Launch
        </Button>

        <Offcanvas show={show} onHide={handleClose}>
          <div className="message">
            <Button
              className="closeButton"
              variant="primary"
              onClick={handleClose}
            >
              X
            </Button>
            <div className="text">
              <Offcanvas.Title>Home</Offcanvas.Title>
              <br />
              <Offcanvas.Body>
                Shop
                Cart
              </Offcanvas.Body>
            </div>
          </div>
        </Offcanvas>
      </div>
    </>
  );
}
