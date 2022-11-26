import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.module.css';

const logo = (props) => {
  return (
    <div className={classes.Logo} style={{height: props.height}}>
      <img src={burgerLogo} alt="MyBruger logo" />
    </div>
  )
}

export default logo;