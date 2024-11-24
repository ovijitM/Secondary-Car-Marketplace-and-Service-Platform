import React, { useState } from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";

// Simulate available and unavailable cars for rent
const cars = [
  { id: 1, model: "Toyota Corolla", available: true, price: 50 },
  { id: 2, model: "Honda Civic", available: false, price: 60 },
  { id: 3, model: "BMW X5", available: true, price: 120 },
  { id: 4, model: "Audi A4", available: false, price: 100 },
];

const CarAvailability = () => {
  const [selectedCar, setSelectedCar] = useState(null);

  // Handle selection of car for availability check
  const checkAvailability = (car) => {
    setSelectedCar(car);
  };

  return (
    <Container>
      <h3 className="text-center mb-4">Car Availability for Rent</h3>
      <Row>
        {cars.map((car) => (
          <Col key={car.id} sm={12} md={6} lg={3} className="mb-4">
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>{car.model}</Card.Title>
                <Card.Text>Price per day: ${car.price}</Card.Text>
                <Card.Text>
                  {car.available ? "Available for Rent" : "Not Available"}
                </Card.Text>
                <Button
                  variant="primary"
                  disabled={!car.available}
                  onClick={() => checkAvailability(car)}
                >
                  {car.available ? "Rent Now" : "Out of Stock"}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {selectedCar && (
        <div className="mt-4">
          <h4>Selected Car: {selectedCar.model}</h4>
          <p>
            {selectedCar.available
              ? "This car is available for rent."
              : "This car is currently not available."}
          </p>
          <p>Price per day: ${selectedCar.price}</p>
        </div>
      )}
    </Container>
  );
};

export default CarAvailability;
