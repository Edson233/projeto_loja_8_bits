import { useContext } from "react";
import { CartContext } from "../../context/theme_context";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
export const CreateProduct = (props) => {
    const navegate = useNavigate()
    const {cartAdd , cart} = useContext(CartContext)
    const {img, name, price, id, description} = props.data;
    const amount = cart[id]

    const handleClick = () => {
        if (cart[id] > 0){
            navegate("./cart")
        }else{
            cartAdd(id)
        }
    }
    return <div className="product-outside">
    <div className="product" id={id}>
        <img className="img" src={img} alt="" />
        <p className="item-description">{description}</p>
        <h1 className="name">{name}</h1>
        <h2 className="price">R${price}</h2>
        {amount < 1 ? <button className="CartAddButton shop-button" type="button" onClick={handleClick}>Adicionar ao carrinho</button>
        : <button className="goToCartButton shop-button" type="button" onClick={handleClick}>Ir para Carrinho</button>}
        </div>
    </div>
}

