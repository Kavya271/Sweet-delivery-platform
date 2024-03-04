import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../Hooks/useCart';
import classes from './header.module.css';
import { useAuth } from '../../Hooks/useAuth';
import logoImage from '../../Assets/logo.png';

// Define the Banner component here
export const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-description">
        <h2>
          <b>Savor the Sweetness of SucroBee</b>
        </h2>
        <p>Unwrap Happiness Today!!</p>
        <div className="btn-container">
          <a href="/">Order Now!</a>
        </div>
      </div>
     
    </div>
  );
};

// Define the Header component
export default function Header() {
  const { user, logout } = useAuth();
  const { cart } = useCart();

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Link to="/" className={classes.logo}>
          <img src={logoImage} alt="SucroBee Logo" className={classes.logoImage} />
        </Link>
        <nav>
          <ul>
            {user ? (
              <li className={classes.menu_container}>
                <Link to="/profile">{user.name}</Link>
                <div className={classes.menu}>
                  <Link to="/profile">Profile</Link>
                  <Link to="/orders">Orders</Link>
                  <a onClick={logout}>Logout</a>
                </div>
              </li>
            ) : (
              <Link to="/login">Login</Link>
            )}

            <li>
              <Link to="/cart">
                Cart
                {cart.totalCount > 0 && (
                  <span className={classes.cart_count}>{cart.totalCount}</span>
                )}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* Include the Banner component here */}
      <Banner />
    </header>
  );
}
