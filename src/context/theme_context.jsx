import { createContext , useState } from "react";
import { PRODUCTS } from "../assets/products";


export const CartContext = createContext("")

const GetAllItems = () => {
    const items = []
    for (let i = 1; i < PRODUCTS.length + 1; i++){
        items[i] = 0
    }
    return items
}

export const CartContextProvider = (props) => {
    const [cart, setCart] = useState(GetAllItems())

    const getTotal = () => {
        let total = 0;
        for (const item in cart){
            if (cart[item] > 0){
                let new_product = PRODUCTS.find((product) => product.id === Number(item))
                console.log(new_product)
                total += cart[item] * new_product.price
            }
        }
        return total
    }

    const cartAdd = (id) => {
        setCart((prev) => ({...prev, [id] : prev[id] + 1}))
    }

    const cartRemove = (id, n = 1) => {
        setCart((prev) => ({...prev, [id] : prev[id] - n}))
    }

    const contexValue = {cart ,cartAdd ,cartRemove, getTotal}

    // eslint-disable-next-line react/prop-types
    return <CartContext.Provider value={contexValue}>{props.children}</CartContext.Provider>
}