import { HomePage } from "./components/Home/HomePage";
import { Login } from "./components/User/login";
import { Routes, Router, Route } from "react-router-dom";
import { Register } from "./components/User/register";
import { Home } from "./components/Home/landingPage";
import { ProductData } from "./components/Products/productsData";
import { WishList } from "./components/WishList/list";
import { Carts } from "./components/Cart/carts";
import { Checkout } from "./components/Cart/checkout";
import { User } from "./components/User/profile";
import { About } from "./components/About/about";
import { Contact } from "./components/Contact/contact";
import { PageNotFound } from "./components/404/error";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}>
        <Route index element={<Home/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/products" element={<ProductData/>}/>
        <Route path="/wishlist" element={<WishList/>}/>
        <Route path="/cart" element={<Carts/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/user" element={<User/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/404" element={<PageNotFound/>}/>
      </Route>
    </Routes>
  );
}

export default App;
