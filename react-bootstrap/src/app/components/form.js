"use client";
import { useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";

export default function FormExample() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className="form">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom1">
            <Form.Label className="name">
              First Name :
              <Form.Control
                className="name"
                required
                type="text"
                placeholder="First Name"
              />
            </Form.Label>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label className="name">Last Name : </Form.Label>
            <Form.Control
              className="name"
              required
              type="text"
              placeholder="Last Name"
            />
          </Form.Group>
          <Form.Group
            className="name"
            as={Col}
            md="4"
            controlId="validationCustomUsername"
          >
            <Form.Label className="name">Address : </Form.Label>
            <Form.Control
              className="name"
              type="text"
              placeholder="Username"
              required
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group
            className="name"
            as={Col}
            md="6"
            controlId="validationCustom03"
          >
            <Form.Label className="name">Town/City : </Form.Label>
            <Form.Control
              type="text"
              placeholder="City"
              required
              className="name"
            />
          </Form.Group>
          <Form.Group
            className="name"
            as={Col}
            md="3"
            controlId="validationCustom04"
          >
            <Form.Label>Country : </Form.Label>
            <Form.Control
              className="name"
              type="text"
              placeholder="Country"
              required
            />
          </Form.Group>
          <Form.Group
            className="name"
            as={Col}
            md="3"
            controlId="validationCustom05"
          >
            <Form.Label className="name">Postcode : </Form.Label>
            <Form.Control
              className="name"
              type="text"
              placeholder="Postcode"
              required
            />
          </Form.Group>
        </Row>
        <Form.Group className="name">
          <Form.Check
            required
            label="Agree To Terms And Conditions"
            feedback="You Must Agree Before Submiting"
            feedbackType="invalid"
          />
        </Form.Group>
        <Button className="submitBtn" type="submit">
          Submit Form
        </Button>
      </Form>
    </div>
  );
}


