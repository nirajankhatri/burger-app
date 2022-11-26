import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';
import { useNavigate } from 'react-router';

const controls = [
  { label: 'Salad', type: 'salad'},
  { label: 'Bacon', type: 'bacon'},
  { label: 'Cheese', type: 'cheese'},
  { label: 'Meat', type: 'meat'},
]

const BuildControls = (props) => {
  const navigate = useNavigate()
  return (
    <div className={classes.BuildControls}>
      <p>Price: <strong>{props.price.toFixed(2)}</strong></p>
      {controls.map(ctrl => (
        <BuildControl 
        key={ctrl.label} 
        label={ctrl.label} 
        added = {() => props.ingredientAdded(ctrl.type)}
        removed = {() => props.ingredientRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
        />
      ))}
      <button onClick={props.ordered} className={classes.OrderButton} disabled={!props.purchasable}>ORDER NOW</button>
    </div>
  )
}

export default BuildControls