import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

import Product from "./components/Product/Product";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";

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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
