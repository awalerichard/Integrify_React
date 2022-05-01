import React from "react";
import { Route, Routes } from "react-router-dom";
import DetailPage from "../screens/DetailPage";
import Homepage from "../screens/Homepage";
import NotFound from "../screens/NotFound";

const MainNavigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/breweries/:cardId" element={<DetailPage />} />
      {/* // Using cardId for specifying an element" */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default MainNavigation;
