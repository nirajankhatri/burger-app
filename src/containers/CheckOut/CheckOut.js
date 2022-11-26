import React, { Component } from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
// import withErrorHandler from '../../hoc/withErrorHandler/WithErrorHandler'
import withRouter from '../../hoc/withRouter/withRouter'
import { Outlet } from 'react-router-dom'

class CheckOut extends Component {
  state = {
    ingredients: {
      salad: null,
      meat: null,
      cheese: null,
      bacon: null
    },
    totalPrice: null
  }

  componentDidMount() {
    this.setState({ ingredients: this.props.location.state[0], totalPrice: this.props.location.state[1] });
    // console.log(this.props.location.state[0]);
  }

  checkoutCancledHanadler = () => {
    this.props.navigate(-1);
  }

  checkoutContinuedHandler = () => {
    this.props.navigate('/checkout/contact');
  }

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          checkoutCancled={this.checkoutCancledHanadler}
          checkoutContinued={this.checkoutContinuedHandler}
        />
        <Outlet context={[this.state.ingredients, this.state.totalPrice]} />
      </div>
    )
  }
}

export default withRouter(CheckOut);