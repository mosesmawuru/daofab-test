import React from "react";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages";
import ChildrenPage from "./pages/children";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/children" element={<ChildrenPage />} />
    </Routes>
  );
};
export default App;
