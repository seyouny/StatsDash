import React, { Component, useContext } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { AuthContext } from "../Auth";


// const classes = useStyles();

// const useStyles = makeStyles({
//     root: {
//       width: 300,
//     },
//   });
  
//   function valuetext(value) {
//     return `${value}°C`;
//   }


class NewTournament extends Component {
    constructor(){
        super();
        this.state = {
            showHide : false,
            kills: 50,
            deaths: -25,
            gkills: 75,
            gdeaths:100,
            revives:10,
            damage:1,
            lastStandingKills:10,
            damageToKills:25,
            placement:50,
        }
        this.getSettings = this.getSettings.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.currentUser = useContext(AuthContext);

    }
    handleModalShowHide() {
        this.setState({ ...this.state ,showHide: !this.state.showHide })
    }
    getSettings(event){
        event.preventDefault();
        const {kills, deaths, gkills, gdeaths, damage, damageToKills, revives, lastStandingKills, placement } = event.target.elements;
        const newState= {
            kills: parseInt(kills.value),
            deaths: parseInt(deaths.value),
            gkills: parseInt(gkills.value),
            gdeaths: parseInt(gdeaths.value),
            damage: parseInt(damage.value),
            lastStandingKills: parseInt(lastStandingKills.value),
            damageToKills: parseInt(damageToKills.value),
            placement: parseInt(placement.value)
        }
        console.log(newState);
        // this.saveSettings(newState);
        this.setState({...newState,showHide: !this.state.showHide})
        console.log(this.state);

    }

    handleFormSubmit(event){
        event.preventDefault();
        const {games, title } = event.target.elements;
        console.log(games.value)
        console.log(title.value);
        console.log(this.state);
        console.log(this.currentUser);
        const tournament = {
            name: title,
            games: games,
            gulagKillsMultiplier: this.state.gkills,
            gulagDeathsMultiplier: this.state.gdeaths,
            killsMultiplier: this.state.kills,
            deathsMultiplier: this.state.deaths,
            damageMultiplier: this.state.damage,
            placementMultiplier: this.state.placement,
            revivesMultiplier: this.state.revives,
            clutchKillsMultiplier: this.state.lastStandingKills,
            damageToKillsMultiplier:this.state.damageToKills,
            // UserId:
        }
        console.log(tournament)

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
                            <Form onSubmit ={this.handleFormSubmit}>
                            <Form.Group controlId="formNumGamesTournament">
                                <Form.Label >Number of Games per Tournament (maximum 19)</Form.Label>
                                <Form.Control name= "games" type="text" placeholder="Enter Number" />
                            </Form.Group>

                            <Form.Group controlId="formTournamentName">
                                <Form.Label>Tournament Name (optional)</Form.Label>
                                <Form.Control name= "title" type="text" placeholder="Enter Name" />
                            </Form.Group>

                            <br></br>
                            <Button variant="primary" size="sm" type="submit">
                                Generate Link
                            </Button>
                            </Form>
                            <Button variant="primary" size="sm" className="d-block mb-3" onClick={() => this.handleModalShowHide()}>
                                Adjust Game Settings
                            </Button>

                            <Modal show={this.state.showHide}>
                                <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
                                <Modal.Title>Adjust Game Settings</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>

                                    <p>Scorecard - Choose weight of different stats.</p>
                                    
                                    <Form onSubmit = {this.getSettings}>
                                        <Form.Group controlId="formKills">
                                            <Form.Label>Kills</Form.Label>
                                            <Form.Control  name="kills"  type="text" defaultValue={this.state.kills} />
                                            
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
                                            <Form.Control  name= "deaths" type="text" defaultValue={this.state.deaths} />
                                        </Form.Group>

                                        <Form.Group controlId="formDamage">
                                            <Form.Label>Damage</Form.Label>
                                            <Form.Control  name= "damage" type="text" defaultValue={this.state.damage} />
                                        </Form.Group>

                                        <Form.Group controlId="formGulagWin">
                                            <Form.Label>Gulag Win</Form.Label>
                                            <Form.Control  name= "gkills" type="text" defaultValue={this.state.gkills} />
                                        </Form.Group>

                                        <Form.Group controlId="formGulagLoss">
                                            <Form.Label>Gulag Loss</Form.Label>
                                            <Form.Control  name= "gdeaths"  type="text" defaultValue={this.state.gdeaths} />
                                        </Form.Group>

                                        <Form.Group controlId="formRevives">
                                            <Form.Label>Revives</Form.Label>
                                            <Form.Control  name= "revives" type="text" defaultValue={this.state.revives} />
                                        </Form.Group>

                                        <Form.Group controlId="formLastStandingKills">
                                            <Form.Label>Last Standing Kills</Form.Label>
                                            <Form.Control  name= "lastStandingKills" type="text" defaultValue={this.state.lastStandingKills} />
                                        </Form.Group>

                                        <Form.Group controlId="formDamageToKills">
                                            <Form.Label>Damage to Kills</Form.Label>
                                            <Form.Control name= "damageToKills" type="text" defaultValue={this.state.damageToKills} />
                                        </Form.Group>

                                        <Form.Group controlId="formLastStandingKills">
                                            <Form.Label>Placement</Form.Label>
                                            <Form.Control name = "placement" type="text" defaultValue={this.state.placement} />
                                        </Form.Group>

                                        <Button variant="primary" type ="submit">
                                            Save
                                        </Button>
                                    </Form>

                                </Modal.Body>
                                <Modal.Footer>
                                <Button variant="secondary" onClick={() => this.handleModalShowHide()}>
                                    Close
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