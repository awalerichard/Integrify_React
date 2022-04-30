import React from "react";
import { Route, Routes } from "react-router-dom";
import DetailPage from "../screens/DetailPage";
import Homepage from "../screens/Homepage";
import NotFound from "../screens/NotFound";

const MainNavigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/detail/:cardId" element={<DetailPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default MainNavigation;
