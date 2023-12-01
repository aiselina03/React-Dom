import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import MainLayout from "./layout/MainLayout";
import Shop from "./pages/Shop";
import ShopDetail from "./pages/ShopDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout/>}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/shop" element={<Shop/>}></Route>
            <Route path="/shop/:id" element={<ShopDetail/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
