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
    <div className="container">
    <div className="row">
      {info.map(product => (
        <div key={product.id} className="col-lg-4 col-md-6 mb-4">
          <div className="card">
            <img src={product.image} alt={product.name} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.description}</p>
              <p className="card-text">Price: {product.price}</p>
              <p className="card-text">Net Price: {product.net_price}</p>
              
              <div className="card-categories">
                <h6>Categories:</h6>
                <ul className="list-unstyled">
                  {product.categories.map(category => (
                    <li key={category}>{category}</li>
                  ))}
                </ul>
              </div>
  
              <div className="card-tags">
                <h6>Tags:</h6>
                <ul className="list-unstyled">
                  {product.tags.map(tag => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  
  );
};

export default Orders;
