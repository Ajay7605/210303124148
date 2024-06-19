import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div>
      <Link to={`/product/${product.uniqueId}`}>
        <img src={product.image} alt={product.name} />
        <h2>{product.name}</h2>
        <p>Price: ${product.price}</p>
        <p>Rating: {product.rating}</p>
        <p>Discount: {product.discount}%</p>
        <p>Availability: {product.availability ? 'In Stock' : 'Out of Stock'}</p>
      </Link>
    </div>
  );
};

export default ProductCard;
