import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Price from '../../Components/Price/Price';
import StarRating from '../../Components/StarRating/StarRating';
import Tags from '../../Components/Tags/Tags';
import { useCart } from '../../Hooks/useCart';
import { getById } from '../../services/sweetservices';
import classes from './sweetpage.module.css';
import NotFound from '../../Components/NotFound/NotFound';
export default function SweetPage() {
  const [sweet, setSweet] = useState({});
  const { id } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(sweet);
    navigate('/cart');
  };

  useEffect(() => {
    getById(id).then(setSweet);
  }, [id]);
  return (
    <>
      {!sweet ? (
        <NotFound message="Sweet Not Found!" linkText="Back To Homepage" />
      ) : (
        <div className={classes.container}>
          <img
            className={classes.image}
            src={`${sweet.imageUrl}`}
            alt={sweet.name}
          />

          <div className={classes.details}>
            <div className={classes.header}>
              <span className={classes.name}>{sweet.name}</span>
              <span
                className={`${classes.favorite} ${
                  sweet.favorite ? '' : classes.not
                }`}
              >
                ❤
              </span>
            </div>
            <div className={classes.rating}>
              <StarRating stars={sweet.stars} size={25} />
            </div>

            

            <div className={classes.tags}>
              {sweet.tags && (
                <Tags
                  tags={sweet.tags.map(tag => ({ name: tag }))}
                  forSweetPage={true}
                />
              )}
            </div>

            

            <div className={classes.price}>
              <Price price={sweet.price} />
            </div>

            <button onClick={handleAddToCart}>Add To Cart</button>
          </div>
        </div>
      )}
    </>
  );
}
