import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Orders = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const response = await axios.get(
          'https://fakerapi.it/api/v1/products?_quantity=3&_taxes=1&_categories_type=uuid'
        );
        if (response.data.data && response.data.data.length > 0) {
          setInfo(response.data.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchInfo();
  }, []);

  return (
    <div className="orders-container">
      {info.map(product => (
        <div key={product.id} className="product-card">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <img src={product.image} alt={product.name} />

          <div className="images-container">
            {product.images.map(image => (
              <img key={image.title} src={image.url} alt={image.title} />
            ))}
          </div>

          <p>Price: {product.price}</p>
          <p>Net Price: {product.net_price}</p>

          <div className="categories-container">
            <h3>Categories:</h3>
            <ul>
              {product.categories.map(category => (
                <li key={category}>{category}</li>
              ))}
            </ul>
          </div>

          <div className="tags-container">
            <h3>Tags:</h3>
            <ul>
              {product.tags.map(tag => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Orders;
