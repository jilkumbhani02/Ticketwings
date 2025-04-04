import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import Product from "./components/Product/Product";
import Main from "./components/Main";
import Cart from "./components/Cart/Cart";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div
      className="app"
      style={{
        background:
          "transparent linear-gradient(180deg, #150229 0%, #270820 100%)",
      }}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
