import React, { Component } from "react";
import BeerCard from "./BeerCard.js";
import Loader from "./Loader";

class CardRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stopFetching: () => { },
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
        } else {
          this.setState({
            isNoMoreToLoad: true
          });
        }
      });
  }

  render() {
    let { isLoaded, isNoMoreToLoad } = this.state;

    if (isNoMoreToLoad) {
      return <h4 className="text-center mx-auto">There is no more to load!</h4>;
    } else if (!isLoaded) {
      return (
        <div className="mx-auto">
          <Loader />
        </div>
      );
    } else {
      return (
        <div className="row">
          {this.state.items.map(item => (
            <div className="col-lg-3 my-3" key={item.id}>
              <BeerCard beer={item} />
            </div>
          ))}
        </div>
      );
    }
  }
}
export default CardRow;
