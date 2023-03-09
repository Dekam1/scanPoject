import React from "react";
import { Routes, Route } from 'react-router-dom';
import Authorization from "./pages/Authorization";
import Main from "./pages/Main";

function App() {

  return (
    <Routes>
      <Route exact path="/scan" element={<Main />} />
      <Route exact path="/authorization" element={<Authorization />} />
    </Routes>
  );
}

export default App;
