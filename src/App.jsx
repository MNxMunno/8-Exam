import React from "react";
import Header from "./components/header/Header";
import "./scss/main.scss";
import Home from "./routes/home/Home";
import About from "./routes/about/About";
import Detail from "./routes/detail/Detail";
import { Route, Routes, useLocation } from "react-router-dom";
import Auth from "./routes/auth/Auth";
import Basket from "./routes/basket/Basket";
import Blog from "./routes/blog/BlogPage";
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
import NotFound from "./components/notFound/NotFound";
import CreateCategory from "./routes/admin/createCategory/CreateCategory";
import CreateProduct from "./routes/admin/createProduct/CreateProduct";
import ManageCategory from "./routes/admin/manageCategory/Managecategory";
import ManageProduct from "./routes/admin/manageProduct/ManageProduct";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  useLocation;
  return (
    <>
      <Header />
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
          <Route path="admin" element={<Admin />}>
            <Route path="admin/createProduct" element={<CreateProduct />} />
            <Route path="admin/manageProduct" element={<ManageProduct />} />
            <Route path="admin/manageCategory" element={<ManageCategory />} />r
            <Route path="admin/createCategory" element={<CreateCategory />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;
