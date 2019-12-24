import React from "react";
import "./App.css";
import Nav from "./Nav";
import { Routes } from "./routes";

class App extends React.Component {
  render() {
    return (
      <div className="main-container">
        <Nav />
        <Routes />
      </div>
    );
  }
}

export default App;
