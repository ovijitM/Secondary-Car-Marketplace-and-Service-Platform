import React, { useState } from "react";
import { Form, Button, Alert, Row, Col } from "react-bootstrap";

// List of available repair services and their prices
const services = [
  { name: "Oil Change", cost: 50 },
  { name: "Tire Replacement", cost: 100 },
  { name: "Brake Service", cost: 120 },
  { name: "Engine Checkup", cost: 200 },
];

const ScheduleRepair = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [serviceDate, setServiceDate] = useState("");
  const [totalCost, setTotalCost] = useState(0);

  // Handle service selection
  const handleServiceChange = (e) => {
    const service = services.find((service) => service.name === e.target.value);
    setSelectedService(service);
    setTotalCost(service ? service.cost : 0);
  };

  // Handle form submission to schedule a service
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Service scheduled for ${serviceDate}. Total Cost: $${totalCost}`);
  };

  return (
    <div>
      <h3>Schedule Maintenance/Repair</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="service">
          <Form.Label>Select Service</Form.Label>
          <Form.Control as="select" onChange={handleServiceChange}>
            <option value="">Select a Service</option>
            {services.map((service) => (
              <option key={service.name} value={service.name}>
                {service.name} - ${service.cost}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="serviceDate">
          <Form.Label>Preferred Service Date</Form.Label>
          <Form.Control
            type="date"
            value={serviceDate}
            onChange={(e) => setServiceDate(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Schedule Service
        </Button>
      </Form>

      {selectedService && serviceDate && (
        <Alert variant="success" className="mt-3">
          <p>
            Scheduled {selectedService.name} on {serviceDate}. Total: ${totalCost}
          </p>
        </Alert>
      )}
    </div>
  );
};

export default ScheduleRepair;
