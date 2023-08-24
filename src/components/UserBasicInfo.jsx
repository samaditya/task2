import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserBasicInfo = () => {
  const [info, setInfo] = useState({});

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const response = await axios.get(
          'https://fakerapi.it/api/v1/persons?_quantity=1&_gender=male&_birthday_start=2005-01-01'
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
    <div className="user-container">
      <div className="user-image">
        <img src={info.image} alt="User" />
      </div>
      <div className="user-details">
        <h2>{`${info.firstname} ${info.lastname}`}</h2>
        <p>Email: {info.email}</p>
        <p>Phone: {info.phone}</p>
        <p>Birthday: {info.birthday}</p>
        <p>Gender: {info.gender}</p>
        <p>Address: { (info.street) ? `${info.address.street}, ${info.address.city}, ${info.address.country}` : "street unavailble"}</p>
        <p>Website: <a href={info.website}>{info.website}</a></p>
      </div>
    </div>
  );
};

export default UserBasicInfo;
