import { Routes, Route } from "react-router-dom";
import { Search, PageNotFound, Home, Cart } from "../Pages";

import React from "react";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="search" element={<Search />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};
