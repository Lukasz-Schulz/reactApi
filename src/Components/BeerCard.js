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

  contentCheck(input) {
    if (!input) {
      return "n/a";
    } else {
      return input;
    }
  }

  render() {
    const link = `/beer/${this.props.beer.id}`;
    return (
      <Link to={link}>
        <div className="container p-0 h-100 mb-4 mb-md-0 px-2">
          <div className="card">
            <div className="card-title my-2 h-25">
              <h4 className="text-center my-auto">{this.props.beer.name}</h4>
            </div>
            <hr className="m-0" />
            <div className="card-body row h-100">
              <div className="col-5">
                <img
                  src={this.props.beer.image_url}
                  alt="beer"
                  className="d-block mt-auto mb-auto card-image"
                />
              </div>

              <div className="offset-1 col-6 align-content-center">
                <p>
                  <span className="theme-color-dark font-weight-bold">
                    IBU:
                  </span>
                  {" "}{this.contentCheck(this.props.beer.ibu)}
                </p>
                <p>
                  <span className="theme-color-dark font-weight-bold">
                    ABV:
                  </span>
                  {" "}{this.contentCheck(this.props.beer.abv)}
                </p>
                <p>
                  <span className="theme-color-dark font-weight-bold">
                    EBC:
                  </span>
                  {" "}{this.contentCheck(this.props.beer.ebc)}
                </p>
              </div>
              <div className="col-12 p-2 align-self-end mb-2">
                <span className="theme-color-dark font-weight-bold">
                  Tags:
              </span>
                {" "}{this.props.beer.tagline}
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}
export default BeerCard;
