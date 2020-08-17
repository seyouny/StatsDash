import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import NewPlayer from "./pages/NewPlayer"
import Landing from "./pages/Landing"

function App() {
  return (
    <div className="App">
      <Navbar />
      <NewPlayer />
      {/* <Landing /> */}

      
    </div>
  );
}

export default App;
