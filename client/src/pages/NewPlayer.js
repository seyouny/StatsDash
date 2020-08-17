import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'




class NewPlayer extends Component {


    render() {
        
        return (
            <Container>

            <Row>
                <Col><h3 className="my-5 text-center">New Player</h3></Col>
            </Row>

            <Row>
                <Col md={2}></Col>
                <Col md={8}>
                    <Card>
                        <Card.Body>
                            <Form>
                            <Form.Group controlId="formGamerTag">
                                <Form.Label >Gamer Tag</Form.Label>
                                <Form.Control type="text" placeholder="Enter Gamer Tag" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <br></br>

                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Choose a platform</Form.Label>
                                <Form.Control as="select">
                                <option>Playstation - (psn)</option>
                                <option>Steam - (steam)</option>
                                <option>XBox - (xbl)</option>
                                <option>Activision - (battle) Include your Activision ID#</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="formActivisionId">
                                <Form.Label>Activision ID (optional)</Form.Label>
                                <Form.Control type="text" placeholder="Enter ID" />
                            </Form.Group>

                            <br></br>

                            <Form.Group controlId="formFirstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter First Name" />
                            </Form.Group>

                            <Form.Group controlId="formLastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Last Name" />
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                   
                </Col>
                <Col md={2}></Col>
            </Row>
            </Container>
        )
    }
}

export default NewPlayer;