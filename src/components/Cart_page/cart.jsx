import { PRODUCTS } from "../../assets/products"
import { CartContext } from "../../context/theme_context"
import { useContext } from "react"
import { CreateCartProduct } from "./createCartProduct"
import "./cart.css"

export const CartPage = () => {
    const {cart, getTotal} = useContext(CartContext)
    const totalAmount = getTotal()
    return <div className="cart">
        <div className="cartProducts">
        {PRODUCTS.map((item) =>{
            if (cart[item.id] > 0){
                // eslint-disable-next-line react/jsx-key
                return <CreateCartProduct data={item}></CreateCartProduct>
            }
        })}

        {!totalAmount > 0  &&
        <div className="no-products">
            <h1 className="empty-cart">Você não tem nenhum item no carrinho</h1>
        </div>
        }

        <h1 className="total">{totalAmount > 0? <span>O total da compra é R${totalAmount}</span>: undefined}</h1>

        
        
        </div>
    </div>
}