import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.module.css';
import withRouter from '../../../hoc/withRouter/withRouter';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: '',
    }
  }

  orderHandler = (event) => {
    event.preventDefault();
    const ingredients = this.props.outletContext[0];
    const totalPrice = this.props.outletContext[1];
    this.setState({ loading: true });
    const order = {
      ingredients: ingredients,
      price: totalPrice,
      customer: this.state,
      deliveryMethod: 'Fastest'
    };
    // alert("You Continue!");
    axios.post('/orders.json', order)
      .then(response => {
        this.setState({ loading: false, purchasing: false });
        console.log(response);
        this.props.navigate('/');
      })
      .catch(error => {
        this.setState({ loading: false, purchasing: false });
        console.log(error);
      });
  }

  setName = (event) => {
    this.setState({ name: event.target.value });
  }


  setEmail = (event) => {
    this.setState({ email: event.target.value });
  }


  setStreet = (event) => {
    this.setState(prevState => ({ address: { ...prevState.address, street: event.target.value } }));
  }


  setPostal = (event) => {
    this.setState(prevState => ({ address: { ...prevState.address, postalCode: event.target.value } }));
  }

  render() {
    let form = (
      <form>
        <input className={classes.Input}
          type="text" name="name"
          placeholder="Your Name"
          onChange={this.setName}
        />

        <input className={classes.Input}
          type="email" name="email"
          placeholder="Your Email"
          onChange={this.setEmail}
        />

        <input className={classes.Input}
          type="text" name="street"
          placeholder="Your Steet"
          onChange={this.setStreet}
        />

        <input className={classes.Input}
          type="text" name="postal"
          placeholder="Your Postal code"
          onChange={this.setPostal}
        />
        <Button btnType="Success" clicked={this.orderHandler} >Order</Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    )
  }
}

export default withRouter(ContactData);