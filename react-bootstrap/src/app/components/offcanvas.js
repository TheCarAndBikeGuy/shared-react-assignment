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
          Off Canvas
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
              <Offcanvas.Title>Form</Offcanvas.Title>
              <Offcanvas.Title>Select</Offcanvas.Title>
              <br />
              <Offcanvas.Body className="canvas">
                Shop
                Cart
                LogIn
                SignUp
                About
                FAQS
                Contact
                Info
                Delivery
              </Offcanvas.Body>
            </div>
          </div>
        </Offcanvas>
      </div>
    </>
  );
}
