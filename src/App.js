import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MassMediaPage from "./pages/MassMedia";
import TeamPage from "./pages/TeamPage";
import AppBarComponent from "./components/MainPageComponent/AppBarComponent"
import InstagramPage from "./pages/InstagramPage";
import TelegramPage from "./pages/TelegramPage";

const App = () => {
  return (
    <Router>
      <AppBarComponent /> 
      <Routes>
        <Route path="/" element={<HomePage />}> </Route>
        <Route path="/teams" element={<TeamPage/>}> </Route>
        <Route path="/massmedia" element={<MassMediaPage />}> </Route>
        <Route path="/instagramKL" element={<InstagramPage />}> </Route>
        <Route path="/telegramKL" element={<TelegramPage />}> </Route>
      </Routes>
    </Router>
  );
}
export default App;