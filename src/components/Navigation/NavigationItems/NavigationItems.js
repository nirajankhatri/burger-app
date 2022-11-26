import NavigationItem from "./NavigationItem/NavigationItem"
import classes from './NavigationItems.module.css';

const navigationItems = () => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/">Burger Builder</NavigationItem>
      <NavigationItem link="/orders">Orders</NavigationItem>
    </ul>
  )
}

export default navigationItems;