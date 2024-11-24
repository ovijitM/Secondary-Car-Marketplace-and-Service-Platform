import React from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';

const CompareProducts = () => {
  const productA = { model: 'Model A', price: 100, description: 'Basic model' };
  const productB = { model: 'Model B', price: 150, description: 'Advanced model' };

  return (
    <Container>
      <Row>
        <Col sm={6}>
          <Card>
            <Card.Body>
              <Card.Title>{productA.model}</Card.Title>
              <Card.Text>Price: ${productA.price}</Card.Text>
              <Card.Text>{productA.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6}>
          <Card>
            <Card.Body>
              <Card.Title>{productB.model}</Card.Title>
              <Card.Text>Price: ${productB.price}</Card.Text>
              <Card.Text>{productB.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CompareProducts;
