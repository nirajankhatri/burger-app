import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import SideDrawerToggle from './SideDrawerToggle/SideDrawerToggle';

const toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <SideDrawerToggle clicked={props.toggleSideDrawer} />
      <Logo height='80%' />
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  )
}

export default toolbar;