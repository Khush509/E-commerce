import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { FaCartPlus, FaHeart, FaShoppingCart } from "react-icons/fa";
import { TbEyeFilled } from "react-icons/tb";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Wishlist = ({
  wishlist,
  handleCart,
  cart,
  handleFavorite,
  getProductDetails,
  slugify,
}) => {
  const navigate = useNavigate();

  const Favorites = wishlist.map((product, index) => ({
    id: product.id,
    title: product.title,
    price: product.price,
    image: product.image,
  }));

  return (
    <div>
      {Favorites.length > 0 ? (
        <Container>
          <Row>
            {Favorites.map((product) => (
              <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
                <Card style={{ margin: "1rem" }}>
                  <div style={{ position: "relative" }}>
                    <Card.Img
                      variant="top"
                      src={product.image}
                      alt={product.title}
                      style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "contain",
                        backgroundColor: "#f8f9fa", // Optional: To visualize the empty space
                      }}
                    />
                    <FaHeart
                      style={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        cursor: "pointer",
                        color: wishlist.some((item) => item.id === product.id)
                          ? "red"
                          : "skyBlue",
                      }}
                      size={24}
                      onClick={() => handleFavorite(product)}
                    />
                  </div>
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      ${product.price}
                    </Card.Subtitle>
                    <div className="d-flex justify-content-between align-items-center">
                      <Button
                        variant="outline-primary"
                        onClick={() =>
                          cart.some((item) => item.id === product.id)
                            ? navigate("cart")
                            : handleCart(product)
                        }
                      >
                        {cart.some((item) => item.id === product.id) ? (
                          <FaShoppingCart />
                        ) : (
                          <FaCartPlus />
                        )}
                      </Button>
                      <Link to={`products/${slugify(product.title)}`}>
                        <TbEyeFilled
                          onClick={() => getProductDetails(product)}
                          color="blue"
                          size={24}
                        />
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      ) : (
        <Container className="text-center my-5">
      <h2>Your Wishlist is Empty</h2>
      <p className="mb-4">
        It looks like you haven't added any favorites yet. Browse our categories
        and add items to your wishlist to keep track of the products you love!
      </p>
      <Link to="/home">
        <Button variant="primary">Start Shopping</Button>
      </Link>
    </Container>
      )}
    </div>
  );
};

export default Wishlist;
