import React, { Component } from "react";
import "./styles/App.css";
import CardRow from "./Components/CardRow";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BeerModal from "./Components/BeerModal";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      isNoMoreToFetch: false,
      rows: [
        <CardRow pageNumber={1} key={1} />,
        <CardRow pageNumber={2} key={2} />,
        <CardRow pageNumber={3} key={3} />,
        <CardRow pageNumber={4} key={4} />,
        <CardRow pageNumber={5} key={5} />
      ]
    };
  }

  startNumber = 5;

  nextPageOfRecords() {
    this.startNumber++;
    return this.startNumber;
  }

  getMoreBeer(nextPageOfRecords) {
    let rows = this.state.rows;
    rows.push(
      <CardRow
        pageNumber={nextPageOfRecords}
        key={nextPageOfRecords}
        stopFetching={() => this.stopFetching()}
      />
    );
    this.setState({
      rows: rows
    });
  }

  stopFetching() {
    this.setState({
      isNoMoreToFetch: true
    });
  }

  componentDidMount() {
    this.setState({
      isLoaded: true
    });

    window.onscroll = () => {
      var d = document.documentElement;
      var offset = d.scrollTop + window.innerHeight;
      var height = d.offsetHeight;

      if (offset >= height - 1 && this.state.isNoMoreToFetch === false) {
        this.getMoreBeer(this.nextPageOfRecords());
      }
    };
  }

  render() {
    let { isLoaded } = this.state;
    if (!isLoaded) {
      return <div>Loading..</div>;
    } else {
      return (
        <Router>
          <div className="container mt-3">
            <Route path="/beer/:id" component={BeerModal} />
            <div className="row">{this.state.rows}</div>
          </div>
        </Router>
      );
    }
  }
}

export default App;
