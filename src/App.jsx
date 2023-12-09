import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import NavBar from "./general_componets/navbar"
import { ShopPage }  from "./components/shop_page/shop"
import { CartPage } from "./components/Cart_page/cart"
import { CartContextProvider } from "./context/theme_context"
import { Footer } from "./general_componets/footer"
import { Contact } from "./components/Contact_page/Contact"
import { Acount } from "./components/Acount_page/Acount"

function App() {
    return(<>
      <CartContextProvider>
      <Router>
      <NavBar />
        <Routes>
        <Route path="/" element={<ShopPage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/acount" element={<Acount />}></Route>
        </Routes>
        <Footer />
      </Router>
      </CartContextProvider>
    </>)
}

export default App
