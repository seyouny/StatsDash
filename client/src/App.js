import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import './App.css';
import Navigation from "./components/Navigation";
import NewPlayer from "./pages/NewPlayer"
import Landing from "./pages/Landing"
import NewTournament from "./pages/NewTournament"
import Start from "./components/Start"
import {AuthProvider} from "./Auth";
import PrivateRoute from "./PrivateRoute";
import "./App.scss";
import Splash from "./pages/Splash";
import MyHome from "./pages/MyHome";
import NewChoose from './pages/NewChoose';
import TDashboard1 from './pages/TournamentDash';
import Chart from "./pages/Chart";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Router>
        {/* <Navigation /> */}
        <Switch>

            {/* <Route exact path="/login" component={Splash}/> */}
            <Route exact path="/" component={Splash}/>
            <PrivateRoute exact path="/myhome" component={MyHome}/>
            <Route exact path="/new/player" component={NewPlayer}/>
            <Route exact path="/newplayer" component={NewPlayer}/>
            <Route exact path="/new/tournament" component={NewTournament}/>
            <Route exact path="/new" component={NewChoose}/>
            <Route exact path="/tournament/:tid/dashboard/:userid" component={TDashboard1}/>
            <Route exact path="/chart" component={Chart} />

          </Switch>
     
       
         </Router>
        
       </div>
    </AuthProvider>
   );
 }

export default App;
