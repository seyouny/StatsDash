import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron'


class Landing extends Component {


    render() {
        
        return (
            <Container>

                <Row>
                    <Col><h3 className="my-5 text-center">Stats Dash</h3></Col>
                </Row>

                <Row>
                    <Col>
                        <Jumbotron>
                            
                            <p className="text-center">
                                Image goes here
                            </p>
                            
                        </Jumbotron>
                    </Col>
                </Row>

                <Row className="my-5">
                    <Col md={8}>
                        
                    </Col>

                    <Col md={4}>
                        <Form>
                            <h5 >Player Sign In</h5>
                            <Form.Group controlId="formUserName">
                                <Form.Label>Gamertag</Form.Label>
                                <Form.Control type="text" placeholder="User Name (Gamertag)" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>

            </Container>
        )
    }
}

export default Landing;