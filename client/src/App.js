import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import NewPlayer from "./pages/NewPlayer"
import Landing from "./pages/Landing"
import NewTournament from "./pages/NewTournament"

function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <NewPlayer /> */}
      {/* <Landing /> */}
      <NewTournament />

      
    </div>
  );
}

export default App;
