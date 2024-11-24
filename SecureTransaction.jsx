import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";

const SecureTransaction = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [bankCardType, setBankCardType] = useState(""); // Debit or Credit Card
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    bankName: "",
    accountNumber: "",
    phoneNumber: "",
    pin: "",
  });

  // Handle payment method selection
  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
    setBankCardType(""); // Reset card type when payment method changes
    setPaymentDetails({
      cardNumber: "",
      bankName: "",
      accountNumber: "",
      phoneNumber: "",
      pin: "",
    });
  };

  // Handle card type selection (Debit or Credit Card)
  const handleCardTypeChange = (e) => {
    setBankCardType(e.target.value);
    setPaymentDetails({
      cardNumber: "",
      bankName: "",
      accountNumber: "",
      phoneNumber: "",
      pin: "",
    });
  };

  // Handle input changes for all fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Transaction submitted successfully!");
    console.log(paymentDetails); // You can process the payment here
  };

  return (
    <Container>
      <h2>Secure Transaction</h2>
      <Form onSubmit={handleSubmit}>
        {/* Payment Method Selection (Bank Transfer / Online Money Transfer) */}
        <Form.Group>
          <Form.Label>Choose Payment Method</Form.Label>
          <Row>
            <Col>
              <Form.Check
                type="radio"
                label="Bank Transfer"
                name="paymentMethod"
                value="bankTransfer"
                checked={paymentMethod === "bankTransfer"}
                onChange={handlePaymentMethodChange}
              />
            </Col>
            <Col>
              <Form.Check
                type="radio"
                label="Online Money Transfer"
                name="paymentMethod"
                value="onlineMoneyTransfer"
                checked={paymentMethod === "onlineMoneyTransfer"}
                onChange={handlePaymentMethodChange}
              />
            </Col>
          </Row>
        </Form.Group>

        {/* If Bank Transfer is selected, show card options */}
        {paymentMethod === "bankTransfer" && (
          <>
            <Form.Group>
              <Form.Label>Select Card Type</Form.Label>
              <Row>
                <Col>
                  <Form.Check
                    type="radio"
                    label="Debit Card"
                    name="cardType"
                    value="debitCard"
                    checked={bankCardType === "debitCard"}
                    onChange={handleCardTypeChange}
                  />
                </Col>
                <Col>
                  <Form.Check
                    type="radio"
                    label="Credit Card"
                    name="cardType"
                    value="creditCard"
                    checked={bankCardType === "creditCard"}
                    onChange={handleCardTypeChange}
                  />
                </Col>
              </Row>
            </Form.Group>

            {/* Card Details (only show if Debit or Credit Card is selected) */}
            {bankCardType && (
              <>
                <Form.Group controlId="cardNumber">
                  <Form.Label>Card Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="cardNumber"
                    value={paymentDetails.cardNumber}
                    onChange={handleInputChange}
                    placeholder="Enter Card Number"
                  />
                </Form.Group>
                <Form.Group controlId="bankName">
                  <Form.Label>Bank Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="bankName"
                    value={paymentDetails.bankName}
                    onChange={handleInputChange}
                    placeholder="Enter Bank Name"
                  />
                </Form.Group>
                <Form.Group controlId="accountNumber">
                  <Form.Label>Bank Account Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="accountNumber"
                    value={paymentDetails.accountNumber}
                    onChange={handleInputChange}
                    placeholder="Enter Bank Account Number"
                  />
                </Form.Group>
              </>
            )}
          </>
        )}

        {/* If Online Money Transfer is selected, show options for Bkash, Nagad, Rocket */}
        {paymentMethod === "onlineMoneyTransfer" && (
          <>
            <Form.Group>
              <Form.Label>Select Online Payment Service</Form.Label>
              <Row>
                <Col>
                  <Form.Check
                    type="radio"
                    label="Bkash"
                    name="paymentService"
                    value="bkash"
                    onChange={handleInputChange}
                  />
                </Col>
                <Col>
                  <Form.Check
                    type="radio"
                    label="Nagad"
                    name="paymentService"
                    value="nagad"
                    onChange={handleInputChange}
                  />
                </Col>
                <Col>
                  <Form.Check
                    type="radio"
                    label="Rocket"
                    name="paymentService"
                    value="rocket"
                    onChange={handleInputChange}
                  />
                </Col>
              </Row>
            </Form.Group>

            {/* Mobile Number and PIN (only show when an online service is selected) */}
            {(paymentDetails.paymentService === "bkash" ||
              paymentDetails.paymentService === "nagad" ||
              paymentDetails.paymentService === "rocket") && (
              <>
                <Form.Group controlId="phoneNumber">
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="phoneNumber"
                    value={paymentDetails.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="Enter Mobile Number"
                  />
                </Form.Group>
                <Form.Group controlId="pin">
                  <Form.Label>PIN</Form.Label>
                  <Form.Control
                    type="password"
                    name="pin"
                    value={paymentDetails.pin}
                    onChange={handleInputChange}
                    placeholder="Enter PIN"
                  />
                </Form.Group>
              </>
            )}
          </>
        )}

        {/* Submit Button */}
        <Button variant="primary" type="submit">
          Submit Payment
        </Button>
      </Form>
    </Container>
  );
};

export default SecureTransaction;


