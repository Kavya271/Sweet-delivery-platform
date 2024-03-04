import React from 'react';
import { Link } from 'react-router-dom';
import Price from '../../Components/Price/Price'

import Title from '../../Components/Title/Title';
import { useCart } from '../../Hooks/useCart';
import classes from './cartpage.module.css';
import NotFound from '../../Components/NotFound/NotFound';
export default function CartPage() {
  const { cart, removeFromCart, changeQuantity } = useCart();
  return (
    <>
      <Title title="Cart Page" margin="1.5rem 0 0 2.5rem" />

      {cart.items.length === 0 ? (
        <NotFound message="Cart Page Is Empty!" />
      ) : (
        <div className={classes.container}>
          <ul className={classes.list}>
            {cart.items.map(item => (
              <li key={item.sweet.id}>
                <div>
                  <img src={`${item.sweet.imageUrl}`} alt={item.sweet.name} />
                </div>
                <div>
                  <Link to={`/sweet/${item.sweet.id}`}>{item.sweet.name}</Link>
                </div>

                <div>
                  <select
                    value={item.quantity}
                    onChange={e => changeQuantity(item, Number(e.target.value))}
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                  </select>
                </div>

                <div>
                  <Price price={item.price} />
                </div>

                <div>
                  <button
                    className={classes.remove_button}
                    onClick={() => removeFromCart(item.sweet.id)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className={classes.checkout}>
            <div>
              <div className={classes.sweets_count}>{cart.totalCount}</div>
              <div className={classes.total_price}>
                <Price price={cart.totalPrice} />
              </div>
            </div>

            <Link to="/checkout">Proceed To Checkout</Link>
          </div>
        </div>
      )}
    </>
  );
}
