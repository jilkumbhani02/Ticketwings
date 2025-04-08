import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import Product from "./components/Product/Product";
import Main from "./components/Main";
import Cart from "./components/Cart/Cart";
import { Route, Routes } from "react-router-dom";
import Download from "./components/Download/Download";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div
      className="app"
      style={{
        background:
          "transparent linear-gradient(180deg, #150229 0%, #270820 100%)",
      }}
    >
      {show === true ? (
        <Download setShow={setShow} />
      ) : (
        <Navbar setShow={setShow} />
      )}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
