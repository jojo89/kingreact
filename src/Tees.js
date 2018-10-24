import React from "react";
import "pure-react-carousel/dist/react-carousel.es.css";

class Tees extends React.Component {
  constructor() {
    super();
    this.state = {
      productions: []
    };
  }

  componentDidMount() {
    fetch(
      "https://wt-685a7bcfc0fd1d4b4987e349b94c58f0-0.run.webtask.io/empty-function",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }
    )
      .then(response => response.json())
      .then(responseJson => {
        let prods = responseJson.data.map(product => {
          var photo = require(`../src/img/${product.photos[0]}.png`);
          var link = `/tees/${product.ext}`;
          return (
            <div>
              <a href={link}>
                <h2 className="post-subtitle">{product.name}</h2>
              </a>

              <img src={photo} alt="" height="300" />
              <h4>{product.priceString} </h4>
            </div>
          );
        });
        this.setState({ productions: prods });
      });
  }

  render() {

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="post-preview">
              <div className="center">
                {this.state.productions}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Tees;
