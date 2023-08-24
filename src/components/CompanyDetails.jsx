import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CompanyDetails = () => {
  const [info, setInfo] = useState({});

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const response = await axios.get(
          'https://fakerapi.it/api/v1/companies?_quantity=1'
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
    <div className="container">
    <div className="row">
      <div className="col-lg-6">
        <div className="company-details">
          <h2>Company Details</h2>
          {info.id && (
            <div>
              <h3>{info.name}</h3>
              <p>Email: {info.email}</p>
              <p>VAT: {info.vat}</p>
              <p>Phone: {info.phone}</p>
              <p>Country: {info.country}</p>
              <p>Website: <a href={info.website}>{info.website}</a></p>
              <img src={info.image} alt="Company Logo" className="img-fluid" />
  
              <h4>Address</h4>
              {info.addresses && info.addresses.length > 0 && (
                <div>
                  <p>Street: {info.addresses[0].street}</p>
                  <p>City: {info.addresses[0].city}</p>
                  <p>Zipcode: {info.addresses[0].zipcode}</p>
                </div>
              )}
  
              <h4>Contact</h4>
              {info.contact && (
                <div>
                  <p>Name: {info.contact.firstname} {info.contact.lastname}</p>
                  <p>Email: {info.contact.email}</p>
                  <p>Phone: {info.contact.phone}</p>
                  <p>Birthday: {info.contact.birthday}</p>
                  <p>Gender: {info.contact.gender}</p>
                  <p>Website: <a href={info.contact.website}>{info.contact.website}</a></p>
                  <img src={info.contact.image} alt="Contact Avatar" className="img-fluid" />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default CompanyDetails;
