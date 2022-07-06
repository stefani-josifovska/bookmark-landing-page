import classes from './Navbar.module.css';

const iconHamburger = (
  <svg className={classes['hamburger-logo']} xmlns="http://www.w3.org/2000/svg" width="18" height="15">
    <path
      fill="#242A45"
      fillRule="evenodd"
      d="M0 0h18v3H0V0zm0 6h18v3H0V6zm0 6h18v3H0v-3z"
    />
  </svg>
);

export default iconHamburger;