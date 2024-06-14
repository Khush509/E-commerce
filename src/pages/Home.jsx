import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Container, Row, Col, Button} from 'react-bootstrap';
import { TbEyeFilled } from "react-icons/tb";
import { FaHeart , FaCartPlus, FaShoppingCart} from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

const Home = ({ wishlist, cart, handleCart, handleFavorite, getProductDetails,slugify }) => {

  const [productList, setProductList] = useState([]);
  const navigate = useNavigate();

  async function getProducts() {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      const products = response?.data.map((product) => ({
        id: product.id,
        title: product.title,
        price: product.price,
        description: product.description,
        image: product.image
      }));
      setProductList(products);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  useEffect(() => {
    getProducts()
  }, []);

  return (
    <Container>
      <Row>
        {productList.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Card style={{ margin: '1rem' }}>
              <div style={{ position: 'relative' }}>
                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={product.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'contain',
                    backgroundColor: '#f8f9fa' // Optional: To visualize the empty space
                  }}
                />
                <FaHeart
                  style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    cursor: 'pointer',
                    color: wishlist.some((item) => item.id === product.id) ? 'red' : 'skyBlue',
                  }}
                  size={24}
                  onClick={() => handleFavorite(product)}
                />
              </div>
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">${product.price}</Card.Subtitle>
                <div className="d-flex justify-content-between align-items-center">
                  <Button
                    variant="outline-primary"
                    onClick={() =>
                      cart.some((item) => item.id === product.id)
                        ? navigate('cart')
                        : handleCart(product)
                    }
                  >
                    {cart.some((item) => item.id === product.id) ? <FaShoppingCart/> : <FaCartPlus/>}
                  </Button>
                  {/* <TbEyeFilled onClick={() => getProductDetails(product)} color='blue' size={24} /> */}
                  <Link to={`products/${slugify(product.title)}`}><TbEyeFilled onClick={() => getProductDetails(product)} color='blue' size={24} /></Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
