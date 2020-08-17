import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'




class NewTournament extends Component {


    render() {
        
        return (
            <Container>

            <Row>
                <Col><h3 className="my-5 text-center">Create a Tournament</h3></Col>
            </Row>

            <Row>
                <Col md={2}></Col>
                <Col md={8}>
                    <Card>
                        <Card.Body>
                            <Form>
                            <Form.Group controlId="formNumGamesTournament">
                                <Form.Label >Number of Games per Tournament</Form.Label>
                                <Form.Control type="text" placeholder="Enter Number" />
                            </Form.Group>

                            <Form.Group controlId="formTournamentName">
                                <Form.Label>Tournament Name (optional)</Form.Label>
                                <Form.Control type="text" placeholder="Enter Name" />
                            </Form.Group>

                            <br></br>

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

export default NewTournament;