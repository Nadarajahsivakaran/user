import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import View from "./Components/View";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/view/:id" element={<View />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
