import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Product from "./Product";
import {
  CardElement,
  StripeProvider,
  Elements,
  injectStripe
} from "react-stripe-elements";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel";
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
    const tee = require("../src/white.jpg");
    const frontfar = require("../src/img/frontfar.jpg");
    const backfar = require("../src/img/backfar.jpg");
    const close = require("../src/img/close.jpg");
    const crewNote = require("../src/img/crew.png");
    const crew = require("../src/img/crew.jpg");

    return (
      <div>
        <div className="container">
          <div className="row">
            <h1 className="post-subtitle" />
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
