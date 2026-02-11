import React from 'react';

function Products(props) {
  const { title, price, image } = props;

  return (
    <div>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{price}</p>
    </div>
  );
}

export default Products;
