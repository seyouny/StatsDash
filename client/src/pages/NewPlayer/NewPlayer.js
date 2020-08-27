import React, { useCallback } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import app from "../../firebase";
import {withRouter} from "react-router";
import API from "../../utils/API";
import Navigation from "../../components/Navigation";
import "./style.css"




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
            <Container><div class="Np-Page">
                <Navigation />

            {/* <Row>
                <Col><h3 aria-controls="responsive-col"className="my-5 text-center">New Player</h3></Col>
            </Row> */}

            <Row>
                {/* <Col md={2}></Col> */}
                <Col className="col-form" md={6}>
                    <br></br><br></br>
                    <Card className= "card-body">
                        
                        <Card.Body>
                            <h3 style={{color: "white"}}> New Player</h3>
                            <Form onSubmit = {handleSignUp}>
                            <Form.Group controlId="formGamerTag">
                                <Form.Label style={{color: "white"}} >Gamer Tag</Form.Label>
                                <Form.Control name ="gamerTag" type="text" placeholder="Enter Gamer Tag" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label  style={{color: "white"}}>Password</Form.Label>
                                <Form.Control  name ="password"type="password" placeholder="Password" />
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label  style={{color: "white"}}>Choose a platform</Form.Label>
                                <Form.Control name ="platform" as="select">
                                <option defaultValue = "psn">Playstation - (psn)</option>
                                <option defaultValue = "steam">Steam - (steam)</option>
                                <option defaultValue = "xbox">XBox - (xbl)</option>
                                <option defaultValue = "act">Activision - (battle) Include your Activision ID#</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="formActivisionId">
                                <Form.Label  style={{color: "white"}}>Activision ID (optional)</Form.Label>
                                <Form.Control  name ="activisionId"type="text" placeholder="Enter ID" />
                            </Form.Group>

                            <Form.Group controlId="formFirstName">
                                <Form.Label  style={{color: "white"}}>First Name</Form.Label>
                                <Form.Control name ="firstName" type="text" placeholder="Enter First Name" />
                            </Form.Group>

                            <Form.Group controlId="formLastName">
                                <Form.Label  style={{color: "white"}}>Last Name</Form.Label>
                                <Form.Control  name ="lastName" type="text" placeholder="Enter Last Name" />
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label  style={{color: "white"}}>Email address</Form.Label>
                                <Form.Control  name ="email" type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                   
                </Col>
                <Col md={6}></Col>
            </Row>
            </div></Container>
        )
}


export default NewPlayer;