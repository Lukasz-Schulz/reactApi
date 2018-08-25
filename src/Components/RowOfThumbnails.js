import React, { Component } from "react";
import BeerThumb from "./BeerThumb";
import "../styles/BeerCard.css";

class RowOfThumbnails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      motherBeer: [],
      similarIbu: [],
      similarAbv: [],
      similarEbc: [],
      isLoaded: false
    };
  }

  getSimilarAbv(abv) {
    let rounded = Math.floor(abv);
    fetch(
      `https://api.punkapi.com/v2/beers?abv_lt=${rounded}&abv_gt=${rounded -
        1}&per_page=1`
    )
      .then(response => response.json())
      .then(json => {
        if (json.length > 0) {
          this.setState({
            similarAbv: json
          });
        }
      });
  }

  getSimilarIbu(ibu) {
    fetch(
      `https://api.punkapi.com/v2/beers?ibu_lt=${ibu}&ibu_gt=${ibu -
        5}&per_page=1`
    )
      .then(response => response.json())
      .then(json => {
        if (json.length > 0) {
          this.setState({
            similarIbu: json
          });
        }
      });
  }

  getSimilarEbc(ebc) {
    fetch(
      `https://api.punkapi.com/v2/beers?ebc_gt=${ebc}&ebc_lt=${ebc +
        10}&per_page=1`
    )
      .then(response => response.json())
      .then(json => {
        if (json.length > 0) {
          this.setState({
            similarEbc: json
          });
        }
      });
  }

  componentDidMount() {
    this.getSimilarAbv(this.props.motherBeer.abv);
    this.getSimilarIbu(this.props.motherBeer.ibu);
    this.getSimilarEbc(this.props.motherBeer.ebc);
  }

  render() {
    return (
      <div className="row">
        {this.state.similarAbv.map(item => (
          <div className="col-4" key={item.id}>
            <BeerThumb beer={item} />
          </div>
        ))}
        {this.state.similarIbu.map(item => (
          <div className="col-4" key={item.id}>
            <BeerThumb beer={item} />
          </div>
        ))}
        {this.state.similarEbc.map(item => (
          <div className="col-4" key={item.id}>
            <BeerThumb beer={item} />
          </div>
        ))}
      </div>
    );
  }
}

export default RowOfThumbnails;
