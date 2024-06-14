import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaShoppingCart, FaSignOutAlt} from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/home">Brand</Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="d-flex align-items-center">
            <ul className="navbar-nav me-2">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
              </li>
              <li className="nav-item dropdown">
                <Link 
                  className="nav-link dropdown-toggle" 
                  to="#" 
                  id="navbarDropdown" 
                  role="button" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false">
                  Categories
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="men">Men</Link></li>
                  <li><Link className="dropdown-item" to="women">Women</Link></li>
                  <li><Link className="dropdown-item" to="electronics">Electronics</Link></li>
                  <li><Link className="dropdown-item" to="jewellery">Jewellery</Link></li>
                </ul>
              </li>
            </ul>
          </div>
          <form className="d-flex mx-auto" role="search">
            <input 
              className="form-control me-2" 
              type="search" 
              placeholder="Search..." 
              aria-label="Search"
              style={{ width: '300px' }}
            />
          </form>
          <div className="d-flex align-items-center">
            <ul className="navbar-nav ms-2">
              <li className="nav-item">
                <Link className="nav-link" to="wishlist">Favorites <FaHeart /></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="cart">Cart <FaShoppingCart /></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="logout">Logout <FaSignOutAlt /></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
