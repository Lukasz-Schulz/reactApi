import React, { Component } from "react";
import "../styles/BeerModal.css";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import RowOfThumbnails from "./RowOfThumbnails";

class BeerModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    fetch(`https://api.punkapi.com/v2/beers?ids=${id}`)
      .then(response => response.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        });
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
                  <h4 className="ml-4">{item.tagline}</h4>
                  <div className="row">
                    <img
                      className="col-4 d-block mx-auto modal-image"
                      src={item.image_url}
                      alt="beer"
                    />
                    <div className="col-8">
                      <p>Tips: {item.brewers_tips}</p>
                      <p>IBU: {item.ibu}</p>
                      <p>ABV: {item.abv}</p>
                      <p>EBC: {item.ebc}</p>
                    </div>
                  </div>
                  <p>You may also like:</p>
                  <RowOfThumbnails motherBeer={item} />
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
