import React, { Component } from "react";
import "../styles/BeerModal.css";
import Loader from "./Loader";
import { Link, Redirect } from "react-router-dom";
import RowOfThumbnails from "./RowOfThumbnails";
import FoodPairing from "./FoodPairing";

class BeerModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      items: [],
      id: "",
    };
  }

  contentCheck(input) {
    if (!input) {
      return "n/a";
    } else {
      return input;
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.setState({
      id: this.props.match.params,
    })

    fetch(`https://api.punkapi.com/v2/beers?ids=${id}`)
      .then(response => response.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        });
      });
  }

  redirect = () => {
    console.log("DOSZŁO DO MODALA");
    this.setState({
      id: 11,
    });
  }

  render() {
    let { isLoaded } = this.state;

    if (!isLoaded) {
      return (
        <div className="modal-background">
          <div className="beer-modal d-block">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-3">
                  <Loader />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <Link to="/">
          <div className="modal-background">
            <div className="beer-modal">
              {this.state.items.map(item => (
                <div key={item.id}>
                  <h2 className="text-center mb-3">{item.name}</h2>
                  <h4 className="ml-4 pb-4">{item.tagline}</h4>
                  <div className="row mb-sm-4">
                    <div className="col-sm-4">
                      <div className="">
                        <img className="modal-image d-block img-fluid img-responsive"
                          src={item.image_url}
                          alt="beer"
                        />
                      </div>
                    </div>
                    <div className="col-sm-8">
                      <p><span className="theme-color-dark font-weight-bold"> IBU:</span>{" "}{this.contentCheck(item.ibu)}</p>
                      <p><span className="theme-color-dark font-weight-bold">ABV:</span>{" "}{this.contentCheck(item.abv)}</p>
                      <p><span className="theme-color-dark font-weight-bold">EBC:</span>{" "}{this.contentCheck(item.ebc)}</p>
                      <p>
                        {" "}{item.description}
                      </p>
                      <FoodPairing pairings={item.food_pairing} />
                    </div>
                  </div>
                  <h5 className="p-2">Similar stuff:</h5>
                  <RowOfThumbnails motherBeer={item} handleClick={this.redirect} />
                </div>
              ))}
            </div>
          </div>
        </Link>
      );
    }
  }
}

export default BeerModal;
