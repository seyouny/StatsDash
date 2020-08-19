import React, { useCallback } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import app from "../firebase";
import {withRouter} from "react-router";
import API from "../utils/API"





const NewPlayer = ({history}) =>{
    const handleSignUp = useCallback(async event =>{
        event.preventDefault();
        const {email, password, gamerTag,activisionId,platform,firstName, lastName } = event.target.elements;
        console.log("email: "+ email.value+ " password: "+ password.value+ 
        " gamertag: " +gamerTag.value+ " activisionId: "+ activisionId.value+ 
        " platform: "+ platform.value+ " firstName: "+ firstName.value+ 
        " lastName: "+ lastName.value);
        var newUser ={
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            gamerTag: gamerTag.value,
            activisionId:activisionId.value,
            platform: platform.value

        }
        try {
            await app 
            .auth().createUserWithEmailAndPassword(email.value,password.value).then(function(userRecord){
                newUser.id = userRecord.user.uid
                console.log(userRecord.user.uid);
                API.createUser(newUser);
            });
            
            history.push("/");
        }
        catch (error){
            alert(error);
        }
    },[history]
    );


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
                            <Form onSubmit = {handleSignUp}>
                            <Form.Group controlId="formGamerTag">
                                <Form.Label >Gamer Tag</Form.Label>
                                <Form.Control name ="gamerTag" type="text" placeholder="Enter Gamer Tag" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control  name ="password"type="password" placeholder="Password" />
                            </Form.Group>

                            <br></br>

                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Choose a platform</Form.Label>
                                <Form.Control name ="platform" as="select">
                                <option>Playstation - (psn)</option>
                                <option>Steam - (steam)</option>
                                <option>XBox - (xbl)</option>
                                <option>Activision - (battle) Include your Activision ID#</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="formActivisionId">
                                <Form.Label>Activision ID (optional)</Form.Label>
                                <Form.Control  name ="activisionId"type="text" placeholder="Enter ID" />
                            </Form.Group>

                            <br></br>

                            <Form.Group controlId="formFirstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control name ="firstName" type="text" placeholder="Enter First Name" />
                            </Form.Group>

                            <Form.Group controlId="formLastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control  name ="lastName" type="text" placeholder="Enter Last Name" />
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control  name ="email" type="email" placeholder="Enter email" />
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


export default NewPlayer;