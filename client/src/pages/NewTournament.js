import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';







class NewTournament extends Component {

    constructor(){
        super();
        this.state = {
            showHide : false
        }
    }

    handleModalShowHide() {
        this.setState({ showHide: !this.state.showHide })
    }


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

                            <Button variant="primary" size="sm" className="d-block mb-3" onClick={() => this.handleModalShowHide()}>
                                Adjust Game Settings
                            </Button>

                            <Modal show={this.state.showHide}>
                                <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
                                <Modal.Title>Adjust Game Settings</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>

                                    <p>Scorecard - Choose weight of different stats.</p>
                                    
                                    <Form>
                                        <Form.Group controlId="formKills">
                                            <Form.Label>Kills</Form.Label>
                                            <Form.Control type="text" placeholder="e.g. +50" />
                                        </Form.Group>

                                        <Form.Group controlId="formDeath">
                                            <Form.Label>Death</Form.Label>
                                            <Form.Control type="text" placeholder="e.g. -25" />
                                        </Form.Group>

                                        <Form.Group controlId="formDamage">
                                            <Form.Label>Damage</Form.Label>
                                            <Form.Control type="text" placeholder="e.g. +1" />
                                        </Form.Group>

                                        <Form.Group controlId="formGulagWin">
                                            <Form.Label>Gulag Win</Form.Label>
                                            <Form.Control type="text" placeholder="e.g. +75" />
                                        </Form.Group>

                                        <Form.Group controlId="formGulagLoss">
                                            <Form.Label>Gulag Loss</Form.Label>
                                            <Form.Control type="text" placeholder="e.g. -100" />
                                        </Form.Group>

                                        <Button variant="primary" type="submit">
                                            Submit
                                        </Button>
                                    </Form>

                                </Modal.Body>
                                <Modal.Footer>
                                <Button variant="secondary" onClick={() => this.handleModalShowHide()}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={() => this.handleModalShowHide()}>
                                    Save Changes
                                </Button>
                                </Modal.Footer>
                            </Modal>

                            {/* <Modal.Dialog>
                                <Modal.Header closeButton>
                                    <Modal.Title>Modal title</Modal.Title>
                                </Modal.Header>

                                <Modal.Body>
                                    <p>Modal body text goes here.</p>
                                </Modal.Body>

                                <Modal.Footer>
                                    <Button variant="secondary">Close</Button>
                                    <Button variant="primary">Save changes</Button>
                                </Modal.Footer>
                            </Modal.Dialog> */}

                            <Button variant="primary" size="sm" type="submit">
                                Generate Link
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