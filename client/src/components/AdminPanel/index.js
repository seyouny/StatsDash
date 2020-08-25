//ADMIN PANEL FOR TOURNAMENT DASHBOARD

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import InviteFriend from '../AdminPanel/InviteFriend';
import StartTournButton from '../AdminPanel/StartTournButton';
import StopTournButton from '../AdminPanel/StopTournButton';
import UpdateStatsButton from '../AdminPanel/UpdateStatsButton';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import API from '../../utils/API';

export default function AdminPanel () {
    
    return (

        <div>
            <Container>
                <h3>Admin Panel</h3>
                <p>These buttons need more styling but </p>
            <ButtonGroup color="primary" aria-label="outlined primary button group">
                <InviteFriend />
                <StartTournButton />
                <StopTournButton />
                <UpdateStatsButton />
            </ButtonGroup>
            </Container>
        </div>
    )

}