import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" exact />
        <Route path="/products/:id" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

