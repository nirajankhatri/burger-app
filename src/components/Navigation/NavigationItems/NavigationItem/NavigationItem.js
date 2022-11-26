import classes from './NavigationItem.module.css';
import { NavLink } from 'react-router-dom';

const navigationItem = (props) => {
  return (
    <li className={classes.NavigationItem}>
      <NavLink
        to={props.link}
        className={({isActive}) => (
          isActive ? classes.active : undefined
        )}
        >
        {props.children}
      </NavLink>
    </li>
  )
};

export default navigationItem;