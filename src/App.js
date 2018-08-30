import React, { Component } from "react";
import Gallery from "./Components/Gallery";
import "./styles/App.css";

class App extends Component {
  render() {
    return (
      <div>
        <h1 className="mt-4 ml-5">BeerGuru</h1>
        <h6 className="ml-5">life is too short to drink lame beer</h6>
        <Gallery />
      </div>
    );
  }
}

export default App;
