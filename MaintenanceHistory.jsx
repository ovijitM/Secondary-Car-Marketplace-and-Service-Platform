import React, { useState, useEffect } from 'react';

const MaintenanceHistory = () => {
  const [services, setServices] = useState([]);

  // Fetch maintenance history (replace with actual API call)
  useEffect(() => {
    const fetchServices = async () => {
      const response = await fetch('/api/maintenance'); // replace with your API
      const data = await response.json();
      setServices(data);
    };
    fetchServices();
  }, []);

  return (
    <div>
      <h2>Maintenance & Repair History</h2>
      <ul>
        {services.map((service, index) => (
          <li key={index}>
            <div>
              <h3>{service.type}</h3>
              <p>Date: {service.date}</p>
              <p>Status: {service.status}</p>
              <p>Cost: {service.cost}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MaintenanceHistory;
