import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { FaCartPlus, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { DotLoader } from 'react-spinners'

const Details = ({ productDetails, cart, handleCart, wishlist, handleFavorite }) => {
  const navigate = useNavigate();

  return (
    <>
      {productDetails?.data ? <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <img
              src={productDetails?.data?.image}
              className="img-fluid rounded"
              alt={productDetails?.data?.title}
              style={{ height: '350px', width: '100%', objectFit: 'contain' }}
            />
          </div>
          <div className="col-md-6">
            <h1 className="display-5">{productDetails?.data?.title}</h1>
            <h4 className="text-muted">${productDetails?.data?.price}</h4>
            <p className="lead">{productDetails?.data?.description}</p>
            <div className="d-flex justify-content-start align-items-center m-auto">
              <Button
                variant="outline-primary"
                onClick={() =>
                  cart.some((item) => item.id === productDetails?.data?.id)
                    ? navigate('/cart')
                    : handleCart(productDetails?.data)
                }
                className="me-2"
              >
                {cart.some((item) => item.id === productDetails?.data?.id) ? <FaShoppingCart /> : <FaCartPlus />}
              </Button>
              <FaHeart
                style={{
                  cursor: 'pointer',
                  color: wishlist.some((item) => item.id === productDetails?.data?.id) ? 'red' : 'skyBlue',
                }}
                size={24}
                onClick={() => handleFavorite(productDetails?.data)}
              />
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12">
            <ul className="nav nav-tabs" id="productDetailsTab" role="tablist">
              <li className="nav-item" role="presentation">
                <Link className="nav-link active" id="description-tab" data-bs-toggle="tab" to="#description" role="tab" aria-controls="description" aria-selected="true">Description</Link>
              </li>
              <li className="nav-item" role="presentation">
                <Link className="nav-link" id="reviews-tab" data-bs-toggle="tab" to="#reviews" role="tab" aria-controls="reviews" aria-selected="false">Reviews</Link>
              </li>
            </ul>
            <div className="tab-content" id="productDetailsTabContent">
              <div className="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
                <p className="mt-3">{productDetails?.data?.description}</p>
              </div>
              <div className="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                <p className="mt-3">Customer Reviews: {productDetails?.data?.rating?.count}</p>
                <p className="mt-3">Overall Rating: {productDetails?.data?.rating?.rate}</p>
              </div>
            </div>
          </div>
        </div>
      </div> : navigate('/')}
    </>
  );
};

export default Details;


