//ADMIN PANEL FOR TOURNAMENT DASHBOARD

import React from 'react';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import InviteFriend from '../AdminPanel/InviteFriend';
import AddFriends from '../AdminPanel/AddFriends';
import StartTournButton from '../AdminPanel/StartTournButton';
import StopTournButton from '../AdminPanel/StopTournButton';
import UpdateStatsButton from '../AdminPanel/UpdateStatsButton';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import Styles from './adminpanelstyle.css';
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
import API from '../../utils/API';
import { purple } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    }
  }));


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));

export default function AdminPanel () {
    const classes = useStyles();

    return (

        <div className={classes.root}>
            <Accordion>

                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography className={classes.heading}><strong>Admin Panel</strong></Typography>
                </AccordionSummary>
                
                <AccordionDetails>

                    <Container>
                        <p>These buttons need work on back-end functions. Styling should be done via Materialize UI theme - see Jen for details.</p>
                            <ButtonGroup color="primary" aria-label="admin button group">
                                <InviteFriend />
                                <StartTournButton />
                                <StopTournButton />
                                <UpdateStatsButton />
                                <AddFriends />
                            </ButtonGroup>
                    </Container>

                </AccordionDetails>

            </Accordion>
        </div>
    )

}