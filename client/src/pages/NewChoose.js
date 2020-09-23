import React, { Component, useContext } from "react";
import { AuthContext } from "../Auth";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Navigation from "../components/Navigation";
import StacyS from "../components/NewChoose/StacyS.png";
import soldier1 from "../components/NewChoose/soldier1.jpg";
import GioNoisy from "../components/NewChoose/GioNoisy.jpeg";
import JenJayme from "../components/NewChoose/jen-head-shot.png";
import AlexPic from "../components/NewChoose/IMG_0026.jpg";
import RoycePic from "../components/NewChoose/RoyceDemoPic.JPG";
import Tilt from "react-tilt";
import "./style.css"


export default function NewChoose () {

    return (
        <Container class="Container-NC">
            <Navigation></Navigation>
            <Grid container spacing={5}
                    direction="row"
                    justify="center"
                    alignItems="center">

                <Grid item xs={5}> <Tilt options={{ max: 25 }}>
                    <Paper className="newChoose">
                        <Card>
                            <CardMedia
                                component="img"
                                alt="Gio Noisy"
                                height="240"
                                image={GioNoisy}
                                title="Contemplative Reptile"
                                />
                            <CardContent className="card-contentNC">
                                If you have not yet signed up, here's where to do that.
                                {/* <CardActionArea>
                                    <Button style={{color: "blue"}}className="action-button"size="small" color="primary" href="/new/player">
                                    New Player
                                    </Button>
                                </CardActionArea> */}
                            </CardContent>
                        </Card>
                    </Paper>
                    </Tilt>
                </Grid><br></br>
                <Grid item xs={5}> <Tilt options={{ max: 25 }}>
                    <Paper className="newChoose">
                        <Card>
                            <CardMedia
                                component="img"
                                alt="Stacy Pic"
                                height="240"
                                image={StacyS}
                                title="Contemplative Reptile"
                                />
                            <CardContent className="card-contentNC">
                            Seyoung, also known as Stacey, is a recent graduate with a Bachelor's of Science from UC Irvine. She decided to join a coding boot camp in order to gain the technical skills needed to become a software engineer. She aspires to be involved in green technology or sustainable technology and hopes to help alleviate the effects of climate change.
                                {/* <CardActionArea>
                                    <Button style={{color: "blue"}}className="action-button"size="small" color="primary" href="/new/player">
                                    New Player
                                    </Button>
                                </CardActionArea> */}
                            </CardContent>
                        </Card>
                    </Paper>
                    </Tilt>
                </Grid><br></br>

                <Grid item xs={5}> <Tilt options={{ max: 25 }}>
                    <Paper className="newChoose">
                        <Card>
                            <CardMedia
                                component="img"
                                alt="Jen Jayme"
                                height="240"
                                image={JenJayme}
                                title="Contemplative Reptile"
                                />
                            <CardContent className="card-contentNC">
                            Jen is enjoying a second career in full-stack web development after 20+ years in fundraising, marketing and communications for great causes. Jen holds a B.A. in English with Honors from UC Berkeley and a Certificate in Full Stack Web Development from Berkeley Coding Boot Camp. Jen's proficiencies include Javascript, React, APIs, and Front-End Design as well as server-side and database architectures such as MySql, MongoDB and Node/Express servers.  She is currently exploring employment opportunities while running a consulting business
                                {/* <CardActionArea>
                                    <Button style={{color: "blue"}}className="action-button"size="small" color="primary" href="/new/player">
                                    New Player
                                    </Button>
                                </CardActionArea> */}
                            </CardContent>
                        </Card>
                    </Paper>
                    </Tilt>
                </Grid><br></br>
    
                <Grid item xs={5}> <Tilt options={{ max: 25 }}>
                    <Paper className="newChoose">
                        <Card>
                            <CardMedia
                                component="img"
                                alt="Royce Pic"
                                height="240"
                                image={RoycePic}
                                title="Contemplative Reptile"
                                />
                            <CardContent className="card-contentNC">
                                If you have not yet signed up, here's where to do that.
                                {/* <CardActionArea>
                                    <Button style={{color: "blue"}}className="action-button"size="small" color="primary" href="/new/player">
                                    New Player
                                    </Button>
                                </CardActionArea> */}
                            </CardContent>
                        </Card>
                    </Paper>
                    </Tilt>
                </Grid><br></br>
                <Grid className="NC-card" item xs={5}>
                <Tilt options={{ max: 25 }}>
                    <Paper className="newChoose">
                        <Card>
                        <CardMedia
                            component="img"
                            alt="Alex Pic"
                            height="240"
                            image={AlexPic}
                            title="Contemplative Reptile"
                            />
                            <CardContent className="card-contentNC">
                            I am aspiring to move into the technology space as a Full Stack Web Developer. Currently working towards earning a certificate from UC Berkeley Coding Bootcamp.

Proficient in JavaScript, CSS(Cascading Style Sheets), HTML, API, MySQL/SQL, GitHub, Heroku, Git, JQuery, Express.js, JSON, OOP(Object Oriented Programming), and experienced in developing with React, Node.js, MongoDB, and using cloud based computing platforms like AWS, and CSS Frameworks like Bootstrap and Materialize.
                                {/* <CardActionArea>
                                    <Button style={{color: "blue"}}className="action-button"size="small" color="primary" href="/new/tournament">
                                    New Tournament
                                    </Button>
                                </CardActionArea> */}
                            </CardContent>
                        </Card>
                    </Paper>
                    </Tilt>
                </Grid>
            </Grid>                
        </Container>
        
    
    
        )
    }