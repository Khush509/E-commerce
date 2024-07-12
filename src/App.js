import Layout from "./components/Layout";
import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import { useEffect, useState } from "react";
import Mens from "./pages/Mens";
import Womens from "./pages/Womens";
import Electronics from "./pages/Electronics";
import Jewelleries from "./pages/Jewelleries";
import Details from "./pages/Details";
import axios from "axios";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./ProtectedRoutes";

function App() {
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [totalValue, setTotalValue] = useState();
  const [productDetails, setProductDetails] = useState([]);

  const handleCart = (product) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (item) => item.id === product.id
      );
      if (existingIndex !== -1) {
        return [...prevCart];
      } else {
        return [...prevCart, product];
      }
    });
    handleQuantityChange(product.id, product.price, 1, false);
  };

  const handleRemove = (product) => {
    setCart((prevCart) => {
      return prevCart.filter((item) => item.id !== product.id);
    });
    handleQuantityChange(product.id, product.price, 1, true);
  };

  const handleQuantityChange = (
    productId,
    productPrice,
    quantity,
    isRemove = false
  ) => {
    let parsedQuantity = parseInt(quantity, 10);
    const parsedPrice = parseFloat(productPrice);

    if (isNaN(parsedQuantity) || isNaN(parsedPrice)) {
      console.error("Invalid input: Quantity or Price is not a number");
      return;
    }

    if (isRemove) {
      setQuantities((prevQuantities) => {
        const updatedQuantities = { ...prevQuantities };
        delete updatedQuantities[productId];
        return updatedQuantities;
      });
    } else {
      if (parsedQuantity > 10 || parsedQuantity <= 0) {
        parsedQuantity = 1;
      }
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [productId]: {
          qty: parsedQuantity,
          price: parsedPrice,
        },
      }));
    }
  };

  const handleFavorite = (product) => {
    setWishlist((prevWishlist) => {
      const existingIndex = prevWishlist.findIndex(
        (item) => item.id === product.id
      );
      if (existingIndex !== -1) {
        return prevWishlist.filter((item) => item.id !== product.id);
      } else {
        return [...prevWishlist, product];
      }
    });
  };

  const getProductDetails = async (product) => {
    const tempProductDetails = await axios.get(
      `https://fakestoreapi.com/products/${product.id}`
    );
    setProductDetails(tempProductDetails);
  };

  const slugify = (text) => {
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, "-") // Replace spaces with -
      .replace(/[^\w\-]+/g, "") // Remove all non-word chars
      .replace(/\-\-+/g, "-") // Replace multiple - with single -
      .replace(/^-+/, "") // Trim - from start of text
      .replace(/-+$/, ""); // Trim - from end of text
  };

  useEffect(() => {
    const newTotalValue = Object.values(quantities).reduce(
      (total, { qty, price }) => {
        return total + qty * price;
      },
      0
    );
    const Total = newTotalValue.toFixed(2);
    setTotalValue(Total);
  }, [quantities]);

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route
              index
              element={
                <Home
                  handleFavorite={handleFavorite}
                  wishlist={wishlist}
                  setWishlist={setWishlist}
                  cart={cart}
                  setCart={setCart}
                  handleRemove={handleRemove}
                  handleCart={handleCart}
                  getProductDetails={getProductDetails}
                  slugify={slugify}
                />
              }
            />
            <Route
              path="wishlist"
              element={
                <Wishlist
                  wishlist={wishlist}
                  setWishlist={setWishlist}
                  cart={cart}
                  handleCart={handleCart}
                  handleFavorite={handleFavorite}
                  slugify={slugify}
                  getProductDetails={getProductDetails}
                />
              }
            />
            <Route
              path="cart"
              element={
                <Cart
                  cart={cart}
                  wishlist={wishlist}
                  setCart={setCart}
                  handleRemove={handleRemove}
                  handleQuantityChange={handleQuantityChange}
                  quantities={quantities}
                  handleCart={handleCart}
                  totalValue={totalValue}
                  handleFavorite={handleFavorite}
                  setTotalValue={setTotalValue}
                  getProductDetails={getProductDetails}
                  slugify={slugify}
                />
              }
            />
            <Route
              path="men"
              element={
                <Mens
                  handleFavorite={handleFavorite}
                  wishlist={wishlist}
                  setWishlist={setWishlist}
                  cart={cart}
                  setCart={setCart}
                  handleCart={handleCart}
                  getProductDetails={getProductDetails}
                  slugify={slugify}
                />
              }
            />
            <Route
              path="women"
              element={
                <Womens
                  handleFavorite={handleFavorite}
                  wishlist={wishlist}
                  setWishlist={setWishlist}
                  cart={cart}
                  setCart={setCart}
                  handleCart={handleCart}
                  getProductDetails={getProductDetails}
                  slugify={slugify}
                />
              }
            />
            <Route
              path="electronics"
              element={
                <Electronics
                  handleFavorite={handleFavorite}
                  wishlist={wishlist}
                  setWishlist={setWishlist}
                  cart={cart}
                  setCart={setCart}
                  handleCart={handleCart}
                  getProductDetails={getProductDetails}
                  slugify={slugify}
                />
              }
            />
            <Route
              path="jewellery"
              element={
                <Jewelleries
                  handleFavorite={handleFavorite}
                  wishlist={wishlist}
                  setWishlist={setWishlist}
                  cart={cart}
                  setCart={setCart}
                  handleCart={handleCart}
                  getProductDetails={getProductDetails}
                  slugify={slugify}
                />
              }
            />
            <Route
              path="products/:slug"
              element={
                <Details
                  productDetails={productDetails}
                  handleFavorite={handleFavorite}
                  wishlist={wishlist}
                  setWishlist={setWishlist}
                  cart={cart}
                  setCart={setCart}
                  handleRemove={handleRemove}
                  handleCart={handleCart}
                  getProductDetails={getProductDetails}
                />
              }
            />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
