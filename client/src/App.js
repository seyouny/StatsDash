import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Navigation from "./components/Navigation";
import NewPlayer from "./pages/NewPlayer"
import Landing from "./pages/Landing"
import NewTournament from "./pages/NewTournament"
import Start from "./components/Start"

function App() {
  return (
    <div className="App">
      <Router>
      <Navigation />

      <Switch>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/newplayer" component={NewPlayer}/>
          <Route exact path="/newtournament" component={NewTournament}/>

        </Switch>
      {/* <Start></Start> */}
      {/* <NewPlayer /> */}
      {/* <Landing /> */}
      {/* <NewTournament /> */}
      </Router>
      
    </div>
  );
}

export default App;
