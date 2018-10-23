import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import PayPal from "./PayPal";
import Credit from "./Credit";
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

class Product extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      product: []
    };
  }
  componentDidMount() {
    fetch(
      `https://wt-685a7bcfc0fd1d4b4987e349b94c58f0-0.run.webtask.io/new-single-prod?name=${
        this.props.match.params.product
      }`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        params: {
          name: "crew"
        }
      }
    )
      .then(response => response.json())
      .then(responseJson => {
        let product = responseJson.data;
        var photo = require(`../src/img/${product.photos[0]}.png`);
        var link = `/tees/${product.ext}`;
        var pay = props => {
          return <PayPal payPalId={product.payPal} />;
        };
        let html = (
          <div>
            <h2 className="post-subtitle">{product.name}</h2>

            <img src={photo} alt="" height="300" />
            <h4>{product.priceString} </h4>
            <Route path="/tees/:product/paypal" component={pay} />
            <p>{product.description}</p>
          </div>
        );

        this.setState({ product: html });
      });
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="post-preview">
              <div className="center">{this.state.product}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
