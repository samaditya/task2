import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Creditcard = () => {
  const [info, setInfo] = useState({});

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const response = await axios.get(
          'https://fakerapi.it/api/v1/credit_cards?_quantity=1'
        );
        if (response.data.data && response.data.data.length > 0) {
          setInfo(response.data.data[0]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchInfo();
  }, []);

  return (
    <div className="container user-container">
    <div className="card credit-card-container">
      <div className="card-body">
        <h2 className="card-title">Credit Card Information</h2>
        {info.type && (
          <div className="card credit-card">
            <div className="card-body">
              <p className="card-text">Type: {info.type}</p>
              <p className="card-text">Number: {info.number}</p>
              <p className="card-text">Expiration: {info.expiration}</p>
              <p className="card-text">Owner: {info.owner}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
  

  );
};

export default Creditcard;
