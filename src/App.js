import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Collection from "./components/Collection/Collection";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div
        style={{
          background:
            "transparent linear-gradient(180deg, #150229 0%, #270820 100%)",
        }}
      >
        <Header />
        <Collection />
      </div>
    </div>
  );
}

export default App;
