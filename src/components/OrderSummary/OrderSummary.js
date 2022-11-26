import Aux from "../../hoc/Aux";
import Button from "../UI/Button/Button";

const orderSummary = (props) => {

  let ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
      return <li key={igKey}><span style={{ textTransform: 'capitalize' }}>{igKey}: </span>{props.ingredients[igKey]}</li>
    });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the follwoing ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p><strong>Total Price: {props.totalprice.toFixed(2)}</strong></p>
      <p>Continue to Checkout?</p>
      <Button btnType='Danger' clicked={props.cancel}>CANCEL</Button>
      <Button btnType='Success' clicked={props.continue}>CONTINUE</Button>
    </Aux>
  );
}


export default orderSummary;