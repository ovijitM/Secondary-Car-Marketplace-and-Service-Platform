import React, { useState } from 'react';
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';

const ProductList = () => {
  const products = [
    { id: 1, model: 'Model A', price: 100 },
    { id: 2, model: 'Model B', price: 200 },
    { id: 3, model: 'Model C', price: 150 },
    { id: 4, model: 'Model D', price: 250 },
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    setFilteredProducts(
      products.filter((product) =>
        product.model.toLowerCase().includes(query)
      )
    );
  };

  return (
    <Container>
      <Form.Group controlId="search">
        <Form.Control
          type="text"
          placeholder="Search by model"
          value={searchQuery}
          onChange={handleSearch}
        />
      </Form.Group>
      <Row>
        {filteredProducts.map((product) => (
          <Col sm={6} md={4} key={product.id}>
            <Card>
              <Card.Body>
                <Card.Title>{product.model}</Card.Title>
                <Card.Text>Price: ${product.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
