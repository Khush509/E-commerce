import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-4 pb-2">
      <div className="container">
        <div className="row">
          {/* About Us */}
          <div className="col-md-3 mb-3">
            <h5>About Us</h5>
            <p>
              We are a leading e-commerce company providing high-quality products at affordable prices.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-light">Home</Link></li>
              <li><Link to="/men" className="text-light">Men</Link></li>
              <li><Link to="/women" className="text-light">Women</Link></li>
              <li><Link to="/electronics" className="text-light">Electronics</Link></li>
              <li><Link to="/jewellery" className="text-light">Jewellery</Link></li>
              <li><Link to="/wishlist" className="text-light">Favorites</Link></li>
              <li><Link to="/cart" className="text-light">Cart</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="col-md-3 mb-3">
            <h5>Contact Us</h5>
            <p>
              123 E-commerce St.<br />
              Online City, OC 12345<br />
              Email: support@ecommerce.com<br />
              Phone: +123 456 7890
            </p>
          </div>

          {/* Newsletter */}
          <div className="col-md-3 mb-3">
            <h5>Newsletter</h5>
            <form>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Enter your email" />
              </div>
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>

        <hr className="bg-light" />

        <div className="d-flex justify-content-between align-items-center">
          <p className="mb-0">&copy; 2023 Your Company. All rights reserved.</p>
          <div>
            <Link to="/" className="text-light me-3"><FaFacebook size={24} /></Link>
            <Link to="/" className="text-light me-3"><FaTwitter size={24} /></Link>
            <Link to="/" className="text-light me-3"><FaInstagram size={24} /></Link>
            <Link to="/" className="text-light"><FaLinkedin size={24} /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
