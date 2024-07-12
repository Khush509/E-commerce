import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaHeart, FaShoppingCart, FaSignOutAlt} from 'react-icons/fa';
import { AuthContext } from '../contexts/AuthContext';

const Navbar = () => {
  const [query, setQuery] = useState();
  const { setAuth } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleInputChange = (e) => {
    setQuery(e.target.value)
  }

  console.log(query);

  const handleLogout = () => {
    setAuth(false)
    navigate('/login')
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Brand</Link>
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
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink 
                  className="nav-link dropdown-toggle" 
                  to="#" 
                  id="navbarDropdown" 
                  role="button" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false">
                  Categories
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><NavLink className="dropdown-item" to="men">Men</NavLink></li>
                  <li><NavLink className="dropdown-item" to="women">Women</NavLink></li>
                  <li><NavLink className="dropdown-item" to="electronics">Electronics</NavLink></li>
                  <li><NavLink className="dropdown-item" to="jewellery">Jewellery</NavLink></li>
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
              value={query}
              onChange={handleInputChange}
            />
          </form>
          <div className="d-flex align-items-center">
            <ul className="navbar-nav ms-2">
              <li className="nav-item">
                <NavLink className="nav-link" to="wishlist">Favorites <FaHeart /></NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="cart">Cart <FaShoppingCart /></NavLink>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={handleLogout}>Logout <FaSignOutAlt /></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
