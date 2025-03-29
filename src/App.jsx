import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Product from "./pages/Product";
import Service from "./pages/Service";
import CommonLayout from "./components/CommonLayout";
import Error from "./components/Error";
import ProductDetails from "./pages/ProductDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CommonLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/product/:id" element={<ProductDetails/>}></Route>
          <Route path="/service" element={<Service />}></Route>
          


          <Route path="*" element={<Error />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
