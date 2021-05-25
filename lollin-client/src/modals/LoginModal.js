import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Container } from 'react-bootstrap';
import { GoogleLogin } from 'react-google-login';
import { NaverLogin } from 'react-naver-login';
import HorizonLine from './HorizonLine';

const LoginModal = ({ show, onHide }) => {
    const [values, setValues] = useState('');
    const [error, setError] = useState('');

    const handleInput = e => {
        setValues(e.target.value)
    }

    return (
        <>
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Container>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Login
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>ID</Form.Label>
                            <Form.Control 
                                placeholder="Enter your ID"
                                value={handleInput}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                type="password" 
                                placeholder="Password"
                                value={handleInput}
                            />
                        </Form.Group>

                        <Button block variant="info" type="button" onClick={onHide}>
                            Login
                        </Button>
                        <HorizonLine />
                        <GoogleLogin render={(renderProps) => {
                            return (
                            <Button 
                                onClick={renderProps.onClick} 
                                disabled={renderProps.disabled}
                                block
                                style={{
                                    backgroundColor: "#176bef", 
                                    borderColor: "#176bef",
                                }}
                            >
                                Google 로그인
                            </Button>
                            );
                        }}
                    />
                        <NaverLogin render={(renderProps) => {
                            return (
                            <Button 
                                onClick={renderProps.onClick} 
                                disabled={renderProps.disabled}
                                block
                                style={{
                                    backgroundColor: "#03cf37", 
                                    borderColor: "#03cf37",
                                }}
                            >
                                Naver 로그인
                            </Button>
                            );
                        }}
                    />
                    </Form>
                </Modal.Body>
            </Container>
        </Modal>
        </>
    )
}

export default LoginModal;