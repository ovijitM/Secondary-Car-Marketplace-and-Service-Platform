import React, { useState, useEffect } from 'react';

const PartsCostManagement = () => {
  const [parts, setParts] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  // Fetch parts data (replace with actual API call)
  useEffect(() => {
    const fetchParts = async () => {
      const response = await fetch('/api/parts'); // replace with your API
      const data = await response.json();
      setParts(data);

      // Calculate total cost
      const total = data.reduce((sum, part) => sum + part.price, 0);
      setTotalCost(total);
    };
    fetchParts();
  }, []);

  return (
    <div>
      <h2>Parts & Cost Breakdown</h2>
      <ul>
        {parts.map((part, index) => (
          <li key={index}>
            <div>
              <h3>{part.name}</h3>
              <p>Price: ${part.price}</p>
              <p>Condition: {part.condition}</p>
            </div>
          </li>
        ))}
      </ul>
      <div>
        <h3>Total Repair Cost: ${totalCost}</h3>
      </div>
    </div>
  );
};

export default PartsCostManagement;
