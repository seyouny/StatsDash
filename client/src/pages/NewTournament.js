//CREATE NEW TOURNAMENT PAGE - BOOSTRAP-BASED

import React, { Component, useContext, useState } from "react";

//REACT BOOTSTRAP ELEMENTS
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

//MATERIAL UI ELEMENTS
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

//OTHER DEPENDENCIES
import { AuthContext } from "../Auth";
import API from "../utils/API";
import Navigation from "../components/Navigation";
import SendEmailInvite from "./CreateNewTournament/SendEmailInvite";
import { render } from "react-dom";

// const classes = useStyles();

// const useStyles = makeStyles({
//     root: {
//       width: 300,
//     },
//   });
  
//   function valuetext(value) {
//     return `${value}°C`;
//   }


// class NewTournament extends Component {
const NewTournament= () =>{
  

    const { currentUser } = useContext(AuthContext)
    //   const [show, setShow] = useState(false);
    console.log(currentUser);

    const [state,setState] = useState({
        showHide : false,
        kills: 50,
        deaths: -25,
        gkills: 75,
        gdeaths:100,
        revives:10,
        damage:1,
        lastStandingKills:10,
        damageToKills:25,
        placement:50
    })
        
    const handleModalShowHide =() =>{
        setState({ ...state ,showHide: !state.showHide })
        console.log(state);
    }

    const getSettings =(event)=>{
        event.preventDefault();
        const {kills, deaths, gkills, gdeaths, damage, damageToKills, revives, lastStandingKills, placement } = event.target.elements;
        const newState= {
            kills: parseInt(kills.value),
            deaths: parseInt(deaths.value),
            gkills: parseInt(gkills.value),
            gdeaths: parseInt(gdeaths.value),
            damage: parseInt(damage.value),
            revives:parseInt(revives.value),
            lastStandingKills: parseInt(lastStandingKills.value),
            damageToKills: parseInt(damageToKills.value),
            placement: parseInt(placement.value)
        }
        console.log(newState);
        // this.saveSettings(newState);
        setState({...newState, showHide: !state.showHide})
        console.log(state);

    }

    const TournCodeSend = (message) => {

        alert(message);

        //TODO: GO TO SENDEMAILINVITE PAGE AND PASS TOURNAMENT NAME & CODE TO THAT
            // <SendEmailInvite {...tournament} />
    }

    const handleFormSubmit =(event)=>{
        event.preventDefault();
        const {games, title } = event.target.elements;
        console.log(games.value)
        console.log(title.value);
        console.log(state);
        console.log(currentUser);
        var randomNum = Math.floor(Math.random()*1000)
        const tournamentCode = title.value+"#"+randomNum
        const tournament = {
            tName: title.value,
            games: parseInt(games.value),
            gulagKillsMultiplier: state.gkills,
            gulagDeathsMultiplier: state.gdeaths,
            killsMultiplier: state.kills,
            deathsMultiplier: state.deaths,
            damageMultiplier: state.damage,
            placementMultiplier: state.placement,
            revivesMultiplier: state.revives,
            clutchKillsMultiplier: state.lastStandingKills,
            damageToKillsMultiplier: state.damageToKills,
            status: "pending",
            adminId: currentUser.userId,
            joinCode: tournamentCode
        }

        API.createTournament(tournament, currentUser.userId);
        console.log(tournament);
        TournCodeSend("Your tournament, "+ tournament.tName + " has been created, to have your friends join,"
        +"send them this invite code: \n"+ tournamentCode);

        // these go with tournCodeSend
        // const [show, setShow] = useState(false);
        // const handleClose = () => setShow(false);
        // const handleShow = () => setShow(true);
        
    }
    // render() {
        
        return (
            <Container>
                <Navigation />

            <Row>
                <Col><h3 className="my-5 text-center">Create a Tournament</h3></Col>
            </Row>

            <Row>
                <Col md={2}></Col>
                <Col md={8}>
                    <Card>
                        <Card.Body>
                            <Form onSubmit ={handleFormSubmit}>
                            <Form.Group controlId="formNumGamesTournament">
                                <Form.Label >Number of Games per Tournament (maximum 19)</Form.Label>
                                <Form.Control name= "games" type="text" placeholder="Enter Number" />
                            </Form.Group>

                            <Form.Group controlId="formTournamentName">
                                <Form.Label>Tournament Name (optional)</Form.Label>
                                <Form.Control name= "title" type="text" placeholder="Enter Name" />
                            </Form.Group>

                            <br></br>
                            <Button variant="primary" size="sm" className="d-block mb-3" onClick={handleModalShowHide}>
                                Adjust Game Settings
                            </Button>
                            <Button variant="primary" size="sm" type="submit">
                                Generate Link
                            </Button>
                            </Form>
                           

                            <Modal show={state.showHide}>
                                <Modal.Header closeButton onClick={handleModalShowHide}>
                                <Modal.Title>Adjust Game Settings</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>

                                    <p>Scorecard - Choose weight of different stats.</p>
                                    
                                    <Form onSubmit = {getSettings}>
                                        <Form.Group controlId="formKills">
                                            <Form.Label>Kills</Form.Label>
                                            <Form.Control  name="kills"  type="text" defaultValue={state.kills} />
                                            
                                        </Form.Group>
                                        {/* <Typography id="discrete-slider-small-steps" gutterBottom>
                                            Kills
                                        </Typography>
                                        <Slider
                                                defaultValue={this.state.kills}
                                                getAriaValueText={valuetext}
                                                aria-labelledby="discrete-slider-small-steps"
                                                step={1}
                                                marks
                                                min={0}
                                                max={100}
                                                valueLabelDisplay="auto"
                                                name = "kills"
                                            /> */}
                                        <Form.Group controlId="formDeath">
                                            <Form.Label>Death</Form.Label>
                                            <Form.Control  name= "deaths" type="text" defaultValue={state.deaths} />
                                        </Form.Group>

                                        <Form.Group controlId="formDamage">
                                            <Form.Label>Damage</Form.Label>
                                            <Form.Control  name= "damage" type="text" defaultValue={state.damage} />
                                        </Form.Group>

                                        <Form.Group controlId="formGulagWin">
                                            <Form.Label>Gulag Win</Form.Label>
                                            <Form.Control  name= "gkills" type="text" defaultValue={state.gkills} />
                                        </Form.Group>

                                        <Form.Group controlId="formGulagLoss">
                                            <Form.Label>Gulag Loss</Form.Label>
                                            <Form.Control  name= "gdeaths"  type="text" defaultValue={state.gdeaths} />
                                        </Form.Group>

                                        <Form.Group controlId="formRevives">
                                            <Form.Label>Revives</Form.Label>
                                            <Form.Control  name= "revives" type="text" defaultValue={state.revives} />
                                        </Form.Group>

                                        <Form.Group controlId="formLastStandingKills">
                                            <Form.Label>Last Standing Kills</Form.Label>
                                            <Form.Control  name= "lastStandingKills" type="text" defaultValue={state.lastStandingKills} />
                                        </Form.Group>

                                        <Form.Group controlId="formDamageToKills">
                                            <Form.Label>Damage to Kills</Form.Label>
                                            <Form.Control name= "damageToKills" type="text" defaultValue={state.damageToKills} />
                                        </Form.Group>

                                        <Form.Group controlId="formLastStandingKills">
                                            <Form.Label>Placement</Form.Label>
                                            <Form.Control name = "placement" type="text" defaultValue={state.placement} />
                                        </Form.Group>

                                        <Button variant="primary" type ="submit">
                                            Save
                                        </Button>
                                    </Form>

                                </Modal.Body> 
                                <Modal.Footer>

                                <Button variant="secondary" onClick={() => handleModalShowHide()}>
                                    Close
                                </Button>
                                
                                </Modal.Footer>
                            </Modal>
                            
                        </Card.Body>
                    </Card>
                   
                </Col>
                <Col md={2}></Col>
            </Row>
            </Container>
        )
}

export default NewTournament;