import React from "react";
import { Container, Table, Button, Form, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Cart = ({
  cart,
  quantities,
  handleQuantityChange,
  handleRemove,
  slugify,
  totalValue,
  getProductDetails,
}) => {

  const handleCheckout = () => {
    alert("Pay" ,totalValue)
  }
  return (
    <Container className="my-4">
      {cart.length > 0 ? (
        <Row>
        <h1 className="my-4">Your Cart</h1>
          <Col md={8}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((product) => (
                  <tr key={product.id}>
                    <td className="text-center align-middle">
                      <Link to={`/products/${slugify(product.title)}`}>
                        <img
                          src={product.image}
                          alt={product.title}
                          onClick={() => getProductDetails(product)}
                          style={{
                            width: "100px",
                            height: "100px",
                            objectFit: "contain",
                            backgroundColor: "#f8f9fa",
                          }}
                        />
                      </Link>
                    </td>
                    <td className="align-middle">{product.title}</td>
                    <td className="align-middle">
                      ${product.price.toFixed(2)}
                    </td>
                    <td className="align-middle">
                      <Form.Control
                        type="number"
                        value={quantities[product.id]?.qty || 1}
                        onChange={(e) =>
                          handleQuantityChange(
                            product.id,
                            product.price,
                            parseInt(e.target.value),
                            false
                          )
                        }
                        min={1}
                        max={10}
                      />
                    </td>
                    <td className="align-middle">
                      $
                      {(
                        product.price * (quantities[product.id]?.qty || 1)
                      ).toFixed(2)}
                    </td>
                    <td className="align-middle">
                      <div className="d-flex justify-content-around">
                        <Button
                          variant="danger"
                          onClick={() => handleRemove(product)}
                        >
                          Remove
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
          <Col md={4}>
            <div className="p-4 border rounded">
              <h3>Order Summary</h3>
              <p className="mt-3">Subtotal: ${totalValue}</p>
              <Button variant="primary" onClick={handleCheckout}>
                Proceed to Checkout
              </Button>
            </div>
          </Col>
        </Row>
      ) : (
        <Container className="text-center my-5">
          <h2>Your Cart is Empty</h2>
          <p className="mb-4">
            It looks like you haven't added anything to your cart yet.
          </p>
          <Link to="/home">
            <Button variant="primary">Shop Now</Button>
          </Link>
        </Container>
      )}
    </Container>
  );
};

export default Cart;
