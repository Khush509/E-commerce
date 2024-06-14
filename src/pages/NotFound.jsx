import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Container className="text-center my-5">
      <h2>Page Not Found</h2>
      <p className="mb-4">
        Oops! The page you are looking for does not exist. It might have been moved or deleted.
      </p>
      <Link to="/">
        <Button variant="primary">Go Back to Home</Button>
      </Link>
    </Container>
  );
};

export default NotFound;
