import React from 'react'
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'

import classes from './CheckoutSummary.module.css';

const CheckoutSummary = (props) => {
  return (

    <div className={classes.CheckoutSummary}>
      <h1>We hope it tastes well!</h1>
      <div style={{ with: '300px', height: '300px', margin: 'auto' }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button btnType="Danger" clicked={props.checkoutCancled}>Cancle</Button>
      <Button btnType="Success" clicked={props.checkoutContinued}>Continue</Button>
    </div>

  )
}

export default CheckoutSummary