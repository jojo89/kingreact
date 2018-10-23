import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import PayPal from "./PayPal";
import Credit from "./Credit";
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
            <div className="post-preview">
              <div className="center">
                <h3 className="post-subtitle">T-shirts</h3>
                <img src={tee} alt="" height="300" />
                <h2>14 + 3.82 (shipping) = $17.82 </h2>
                <Route path="/tees/paypal/white" component={PayPal} />
                <Elements>
                  <Route path="/tees/credit/white" component={Credit} />
                </Elements>
                <ul className="nav navbar-nav navbar-right">
                  <li className="pay">
                    <a href="/tees/paypal/white">PayPal</a>
                  </li>
                  <li className="pay">
                    <a href="/tees/credit/white">Credit Card</a>
                  </li>
                </ul>

                <h3 className="post-subtitle">Sweatshirts</h3>
                <CarouselProvider
                  naturalSlideWidth={100}
                  naturalSlideHeight={50}
                  totalSlides={3}
                >
                  <Slider>
                    <Slide index={0}>
                      {" "}
                      <img src={frontfar} alt="" height="300" />
                    </Slide>
                    <Slide index={1}>
                      {" "}
                      <img src={backfar} alt="" height="300" />
                    </Slide>
                    <Slide index={2}>
                      {" "}
                      <img src={close} alt="" height="300" />
                    </Slide>
                  </Slider>
                  <ButtonBack>Back</ButtonBack>
                  <ButtonNext>Next</ButtonNext>
                </CarouselProvider>
                <h2>32 + 11 (shipping)= $43.00 </h2>

                <Route path="/tees/paypal/sweatshirt" component={PayPal} />
                <Elements>
                  <Route path="/tees/credit/sweatshirt" component={Credit} />
                </Elements>
                <ul className="nav navbar-nav navbar-right">
                  <li className="pay">
                    <a href="/tees/paypal/sweatshirt">PayPal</a>
                  </li>
                  <li className="pay">
                    <a href="/tees/credit/sweatshirt">Credit Card</a>
                  </li>
                </ul>


                <CarouselProvider
                  naturalSlideWidth={100}
                  naturalSlideHeight={50}
                  totalSlides={3}
                >
                  <Slider>
                    <Slide index={0}>
                      {" "}
                      <img src={crew} alt="" height="300" />
                    </Slide>
                    <Slide index={1}>
                      {" "}
                      <img src={crewNote} alt="" height="300" />
                    </Slide>
                  </Slider>
                  <ButtonBack>Back</ButtonBack>
                  <ButtonNext>Next</ButtonNext>
                </CarouselProvider>
                 
                 <h2>28 + 11 (shipping) = $39.00 </h2>

                <Route path="/tees/paypal/:product" component={Product}/>


                <Route path="/tees/paypal/:product" component={PayPal} />
                <Elements>
                  <Route path="/tees/credit/crew" component={Credit} />
                </Elements>
                <ul className="nav navbar-nav navbar-right">
                  <li className="pay">
                    <a href="/tees/paypal/crew">PayPal</a>
                  </li>
                  <li className="pay">
                    <a href="/tees/credit/crew">Credit Card</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Tees;
