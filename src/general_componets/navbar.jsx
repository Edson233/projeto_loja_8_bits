import {Link} from "react-router-dom"
import {ShoppingCart} from "phosphor-react"
import "./navbar.css"
import logo from "../assets/Downloads/logo2.jpeg"
import { CartContext } from "../context/theme_context"
import { useContext } from "react"

const NavBar = () => {

    const totalItems = () => {
        const {cart} = useContext(CartContext)
        let total = 0
        for (const item in cart){
            total += cart[item]
        }
        return total
    }

    const items = totalItems()

    return (<nav className="navbar">
        <ul className="nav-list">
            <li className="logo-item nav-item"> <img src={logo} alt="" height="100%" width="500px" className="logo" /> </li>
            <li className="nav-item target"><Link className="nav-link" to="/projeto_loja_8_bits">Shop</Link></li>
            <li className="nav-item target"><Link className="nav-link cart-icon" to="/projeto_loja_8_bits/cart"><ShoppingCart size="2rem" /></Link> {items > 0 ? <span className="cart-items">{items}</span> : undefined } </li>
            <li className="nav-item target"><Link className="nav-link" to="/projeto_loja_8_bits/contact">Contato</Link></li>
            <li className="nav-item target"><Link className="nav-link" to="/projeto_loja_8_bits/acount">Login</Link></li>
        </ul>
    </nav>)
}


export default NavBar