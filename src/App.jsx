import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TextCounter from "./TextCounter";
import NotFound from "./NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TextCounter />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
