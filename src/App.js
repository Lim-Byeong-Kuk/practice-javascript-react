import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ProductReadPage from "./pages/ProductReadPage";
import ProductListPage from "./pages/ProductListPage";
import ProductAddPage from "./pages/ProductAddPage";

function App() {
  return (
    <>
      <Routes>
        {/* <Route index element={<HomePage />} /> */}
        <Route path="/product/:pno" element={<ProductReadPage />} />
        <Route path="/product" element={<ProductListPage />} />
        <Route path="/product/add" element={<ProductAddPage />} />
      </Routes>
    </>
  );
}

export default App;
