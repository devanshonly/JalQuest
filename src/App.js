import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Leaderboard from "./pages/Leaderboard";
import Redeem from "./pages/Redeem";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/redeem" element={<Redeem />} />
      </Routes>
    </Router>
  );
}

export default App;
