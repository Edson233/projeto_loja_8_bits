import { PRODUCTS } from "../../assets/products"
import { CartContext } from "../../context/theme_context"
import { useContext } from "react"
import { CreateCartProduct } from "./createCartProduct"
import "./cart.css"
import { useEffect } from "react"
import gift from "../../assets/Downloads/gift.gif"

export const CartPage = () => {
    const {cart, getTotal, reset} = useContext(CartContext)
    const totalAmount = getTotal()
    const pop = document.getElementById("popUp")

    const checkOut = () => {
        reset()
        document.getElementById("popUp").showModal()
    }

    const hide = () => {
        pop.close()
    }

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

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

        {totalAmount > 0? <button id="checkOut" onClick={checkOut} >Finalizar compra</button>: undefined}


        <dialog id="popUp">
                <div className="popWindow">

                    <h2>Obrigado por comprar conosco</h2>
                    <h2>Seu pedido chegara em breve</h2>
                    <img src={gift} alt="" />
                    <button onClick={hide}>Fechar
                    </button>
                </div>
        </dialog>

        
        
        </div>
    </div>
}