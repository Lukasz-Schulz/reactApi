import React, { Component } from "react";
import "../styles/BeerThumb.css";

class BeerThumb extends Component {
  constructor(props) {
    super(props);

    this.state = {
      beer: []
    };
  }

  render() {
    return (
      <div className="card" >
        <div className="row">
          <div className="col p-1">
            <img
              src={this.props.beer.image_url}
              alt="beer"
              className="d-block my-auto thumb-image"
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="card-title text-center thumb-title mb-auto theme-color-dark font-weight-bold">
              {this.props.beer.name}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BeerThumb;
