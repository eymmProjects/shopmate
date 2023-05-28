import { Routes, Route } from "react-router-dom";
import { Search, PageNotFound, ItemDetail, ItemList } from "../Pages";

import React from "react";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<ItemList />} />
        <Route path="item/:id" element={<ItemDetail />} />
        <Route path="items/women" element={<ItemList />} />
        <Route path="items/men" element={<ItemList />} />
        <Route path="items/shoes" element={<ItemList />} />

        <Route path="search" element={<Search />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};
