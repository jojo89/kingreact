import React, { Component } from "react";
import CardSection from "./CardSection";
import { injectStripe } from "react-stripe-elements";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import Select from "react-validation/build/select";
import Button from "react-validation/build/button";
import { isEmail } from "validator";

const email = value => {
  if (!isEmail(value)) {
    return (
      <span className="form-error is-visible">
        ${value} is not a valid email.
      </span>
    );
  }
};

const required = (value, props) => {
  if (!value || (props.isCheckable && !props.checked)) {
    return <span className="form-error is-visible">Required</span>;
  }
};

class Credit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      size: "sku_BWqLhZu6IdlmE8",
      email: "",
      phone: "",
      state: "",
      country: "",
      city: "",
      postal_code: "",
      address: "",
      formErrors: { email: "", password: "" }
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(ev) {
    // We don't want to let default form submission happen here, which would refresh the page.
    ev.preventDefault();
    var params = this;
    // Within the context of `Elements`, this call to createToken knows which Element to
    // tokenize, since there's only one in this group.
    this.props.stripe
      .createToken({
        name: "Jenny Rosen"
      })
      .then(({ token }) => {
        params.state.stripeToken = token.id;
        fetch(
          "https://wt-685a7bcfc0fd1d4b4987e349b94c58f0-0.run.webtask.io/stripepayments",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(params.state)
          }
        )
          .then(response => response.json())
          .then(responseJson => {
            if (responseJson.error == null) {
              alert("success your item will be shipped soon!");
            } else {
              alert("There was a problem processing your payment");
            }
          });
      });

    // However, this line of code will do the same thing:
    // this.props.stripe.createToken({type: 'card', name: 'Jenny Rosen'});
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="formatter">
        <Form
          action="https://wt-685a7bcfc0fd1d4b4987e349b94c58f0-0.run.webtask.io/stripepayments"
          method="post"
          id="payment-form"
          onSubmit={this.handleSubmit}
        >
          <label for="name">Name</label>
          <Input
            placeholder="name"
            type="text"
            className="ins"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
            validations={[required]}
          />

          <label for="name">Size</label>
          <Select
            className="ins"
            name="size"
            value={this.state.size}
            onChange={this.handleInputChange}
          >
            <option value="sku_BWqLhZu6IdlmE8">SMALL</option>
            <option value="sku_BWqLeYMpZKBaBh">MEDIUM</option>
            <option value="sku_BWqMRSHQlQFtVO">LARGE</option>
            <option value="sku_BWqMbeuLwQOpZD">X-LARGE</option>
            <option value="sku_BWqMJt1Im4ocRf">XX-LARGE</option>
          </Select>

          <label for="email">Email</label>
          <Input
            className="ins"
            placeholder="email"
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
            validations={[required, email]}
          />

          <label for="phone">Phone(optional)</label>
          <Input
            className="ins"
            placeholder="phone"
            type="text"
            name="phone"
            value={this.state.phone}
            onChange={this.handleInputChange}
          />

          <label for="state">State</label>
          <Input
            className="ins"
            placeholder="state"
            type="text"
            name="state"
            value={this.state.state}
            onChange={this.handleInputChange}
            validations={[required]}
          />

          <label for="country">Country</label>
          <Input
            placeholder="country"
            className="ins"
            type="text"
            name="country"
            value={this.state.country}
            onChange={this.handleInputChange}
            validations={[required]}
          />
          <Input type="hidden" name="stripeToken" />

          <label for="city">City</label>
          <Input
            className="ins"
            placeholder="city"
            type="text"
            name="city"
            value={this.state.city}
            onChange={this.handleInputChange}
            validations={[required]}
          />

          <label for="postal_code">Postal Code</label>
          <Input
            className="ins"
            placeholder="postal_code"
            type="text"
            name="postal_code"
            value={this.state.postal_code}
            onChange={this.handleInputChange}
            validations={[required]}
          />

          <label for="address">Address</label>
          <Input
            className="ins"
            placeholder="address"
            type="text"
            name="address"
            value={this.state.address}
            onChange={this.handleInputChange}
            validations={[required]}
          />
          <CardSection />

          <Button>Submit Payment</Button>
        </Form>
      </div>
    );
  }
}

export default injectStripe(Credit);
