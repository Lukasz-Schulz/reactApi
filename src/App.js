import React, { Component } from "react";
import Gallery from "./Components/Gallery";
import "./styles/App.css";

class App extends Component {
  render() {
    return (
      <div>
        <h1>BeerGuru</h1>
        <Gallery />
      </div>
    );
  }
}

export default App;
