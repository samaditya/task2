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
    <div className="credit-card-container">
      <h2>Credit Card Information</h2>
      {info.type && (
        <div className="credit-card">
          <p>Type: {info.type}</p>
          <p>Number: {info.number}</p>
          <p>Expiration: {info.expiration}</p>
          <p>Owner: {info.owner}</p>
        </div>
      )}
    </div>
  );
};

export default Creditcard;
