import { checkPropTypes } from 'prop-types';
import React from 'react'
import classes from './Order.module.css';

const Order = (props) => {

  const ingredients = [];

  for(let ingredientName in props.order.ingredients) {
    ingredients.push(
      {
        name: ingredientName,
        amount: props.order.ingredients[ingredientName]
      }
    );
  }

  const ingredientsOutout = ingredients.map(ig => {
    return (
      <span
        style={{
          textTransform: 'capitalize',
          display: 'inline-block',
          margin: '0 8px',
          border: '1px solid #ccc',
          padding: '5px'
        }}
        key={ig.name}
      >
        {ig.name} ({ig.amount})
      </span>
    )
  });

  return (
    <div className={classes.Order}>
      <p>By: {props.order.customer.name}</p>
      <p>Address: {props.order.customer.address.street}</p>
      <p>Ingredients: {ingredientsOutout}</p>
      <p>Price: <strong>USD {props.order.price.toFixed(2)}</strong></p>
    </div>
  )
}

export default Order