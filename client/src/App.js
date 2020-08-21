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
// import "./App.scss";
import Splash from "./pages/Splash";
import MyHome from "./pages/MyHome";
import Dashboard from "./pages/TournamentDash";


function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Router>
        {/* <Navigation /> */}
        <Switch>

            {/* <Route exact path="/login" component={Splash}/> */}
            <Route exact path="/" component={Splash}/>
            <Route exact path="/myhome" component={MyHome}/>
            <Route exact path="/newplayer" component={NewPlayer}/>
            <Route exact path="/newtournament" component={NewTournament}/>
            <Route exact path="/dashboard" component={Dashboard}/>


          </Switch>
     
       
         </Router>
        
       </div>
    </AuthProvider>
   );
 }

export default App;
