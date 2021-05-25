import React from 'react';
import { Modal, Button, Form, Container } from 'react-bootstrap';
import useForm from "../validation/useForm";
import validate from "../validation/validateSignup";
import axios from 'axios';

const SignupModal = ({ show, onHide }) => {
    const { handleChange, values, handleSubmit, errors } = useForm(validate)

    const handleSignup = () => {
        axios.post('/user/signup')
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            // size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Container>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Sign Up
                    </Modal.Title>
                </Modal.Header>
                    <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>ID</Form.Label>
                            <Form.Control 
                                name="ID" 
                                placeholder="Enter your ID" 
                                value={values.Id}
                                onChange={handleChange}
                            />
                            {errors.Id && <Form.Control.Feedback type="invalid">{errors.Id}</Form.Control.Feedback>}
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                name="password" 
                                type="password" 
                                placeholder="8 characters or more Password"
                                value={values.password}
                                onChange={handleChange} 
                            />
                            {errors.password && <p>{errors.password}</p>}
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>LoL-Nickname</Form.Label>
                            <Form.Control 
                                name="nickname" 
                                placeholder="LoL-Nickname"
                                value={values.nickname}
                                onChange={handleChange} 
                            />
                            {errors.nickname && <p>{errors.nickname}</p>}
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>E-Mail</Form.Label>
                            <Form.Control 
                                name="email"
                                placeholder="Enter your E-Mail"
                                value={values.email}
                                onChange={handleChange} 
                            />
                            {errors.email && <p>{errors.email}</p>}
                        </Form.Group>
                        <Button block variant="info" type="button" className="my-3" onClick={handleSignup}>
                            Sign Up
                        </Button>
                    </Form>
                    </Modal.Body>
            </Container>
        </Modal>
    )
}

export default SignupModal;
