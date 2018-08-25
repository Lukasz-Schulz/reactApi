import React, { Component } from "react";
import BeerCard from "./BeerCard.js";
import Loader from "./Loader";

class CardRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stopFetching: () => {},
      isNoMoreToLoad: false,
      pageNumber: 1,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch(
      `https://api.punkapi.com/v2/beers?page=${
        this.props.pageNumber
      }&per_page=4`
    )
      .then(response => response.json())
      .then(json => {
        if (json.length > 0) {
          this.setState({
            isLoaded: true,
            items: json
          });
          console.log(json.length);
        } else {
          this.setState({
            isNoMoreToLoad: true
          });
          this.props.stopFetching();
        }
      });
  }

  render() {
    let { isLoaded, isNoMoreToLoad } = this.state;

    if (isNoMoreToLoad) {
      return <div className="mx-auto">There is no more to load!</div>;
    } else if (!isLoaded) {
      return (
        <div className="mx-auto">
          <Loader />
        </div>
      );
    } else {
      return (
        <div className="container">
          <div className="row">
            {this.state.items.map(item => (
              <div className="col-lg-3 my-3" key={item.id}>
                <BeerCard beer={item} />
              </div>
            ))}
          </div>
        </div>
      );
    }
  }
}
export default CardRow;
