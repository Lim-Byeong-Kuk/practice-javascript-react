import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ProductReadPage from "./pages/ProductReadPage";
import ProductListPage from "./pages/ProductListPage";

function App() {
  return (
    <>
      <Routes>
        {/* <Route index element={<HomePage />} /> */}
        <Route path="/product/:productId" element={<ProductReadPage />} />
        <Route path="/product" element={<ProductListPage />} />
      </Routes>
    </>
  );
}

export default App;
