import React, { Component } from "react";
import "../styles/BeerCard.css";
import { Link } from "react-router-dom";

class BeerCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      beer: []
    };
  }

  render() {
    const link = `/beer/${this.props.beer.id}`;
    return (
      <Link to={link}>
        <div className="container p-0 h-100 mb-4 mb-md-0">
          <div className="card">
            <h2 className="card-title text-center my-2">
              {this.props.beer.name}
            </h2>
            <hr className="m-0" />
            <div className="card-body row">
              <div className="col-5">
                <img
                  src={this.props.beer.image_url}
                  alt="beer"
                  className="d-block mt-auto mb-auto"
                />
              </div>

              <div className="col-7">
                <ul>
                  <li>IBU: {this.props.beer.ibu}</li>
                  <li>ABV: {this.props.beer.abv}</li>
                </ul>
                <p>Tags: {this.props.beer.tagline}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}
export default BeerCard;
