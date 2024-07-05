import React from "react";
import Header from "./components/header/Header";
import "./scss/main.scss";
import Home from "./routes/home/Home";
import About from "./routes/about/About";
import Detail from "./routes/detail/Detail";
import { Route, Routes } from "react-router-dom";
import Auth from "./routes/auth/Auth";
import Basket from "./routes/basket/Basket";
import Blog from "./routes/blog/Blog";
import Catalog from "./routes/catalog/Catalog";
import Contact from "./routes/contact/Contact";
import Wishlist from "./routes/wishlist/Wishlist";
import Shipping from "./routes/shipping/Shipping";
import Return from "./routes/return/Return";
import Products from "./routes/products/Products";
import Login from "./routes/login/Login";
import Garant from "./routes/garant/Garant";
import Admin from "./routes/admin/Admin";
import Cart from "./routes/cart/Cart";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<Detail />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/return" element={<Return />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/garant" element={<Garant />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<Auth />}>
          <Route path="admin" element={<Admin />}></Route>
        </Route>
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
