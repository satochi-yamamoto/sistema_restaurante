import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SelfServicePage = () => {
  const [selfServices, setSelfServices] = useState([]);

  useEffect(() => {
    const fetchSelfServices = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/self-service`);
        setSelfServices(response.data);
      } catch (error) {
        console.error('Error fetching self-services:', error);
      }
    };

    fetchSelfServices();
  }, []);

  return (
    <div>
      <h1>Self Service</h1>
      <ul>
        {selfServices.map(service => (
          <li key={service.id}>{service.orderNumber} - {service.plateWeight}kg - ${service.totalPrice} - {new Date(service.date).toLocaleString()} - {service.operator}</li>
        ))}
      </ul>
    </div>
  );
};

export default SelfServicePage;
