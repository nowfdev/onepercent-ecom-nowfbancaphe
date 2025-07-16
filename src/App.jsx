import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import MainPage from "./pages/MainPage";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Collection from "./pages/Collection";
import Login from "./pages/Login";
import Order from "./pages/Order";
import PlaceOrder from "./pages/PlaceOrder";
import Product from "./pages/Product";

import "./App.css";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/login" element={<Login />} />
        <Route path="/order" element={<Order />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/product/:productId" element={<Product />} />
      </Routes>
      <Footer />
    </div>
  );
}
//

export default App;
