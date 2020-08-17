import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navigation from "./components/Navigation";
import NewPlayer from "./pages/NewPlayer"
import Landing from "./pages/Landing"
import NewTournament from "./pages/NewTournament"
import Start from "./components/Start"

function App() {
  return (
    <div className="App">
      {/* <Start></Start> */}
      <Navigation />
      {/* <NewPlayer /> */}
      {/* <Landing /> */}
      <NewTournament />

      
    </div>
  );
}

export default App;
