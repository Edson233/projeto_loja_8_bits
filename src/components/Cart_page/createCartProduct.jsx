import { useContext } from "react";
import { CartContext } from "../../context/theme_context";

/* eslint-disable react/prop-types */
export const CreateCartProduct = (props) => {

    const {cartAdd , cartRemove, cart} = useContext(CartContext)
    const {img, name, price, id} = props.data;
    const setZero = () => cartRemove(id, cart[id])
    return <div className="cartProduct" id={id}>
            <img className="img" src={img} alt="" />
            <div className="description">
                <h1 className="name">{name}</h1>
                <div className="quantity">
                    <h2 className="price">R${price}</h2>
                    <div className="buttons">
                    <button className="CartAddButton" type="button" onClick={() => cartAdd(id)}>+</button>
                    <h1 className="numProducts">{cart[id]}</h1>
                    <button className="CartAddButton" type="button" onClick={cart[id] > 0 ? () => cartRemove(id) : undefined}>-</button>
                    </div>
                    <svg onClick={setZero} className="trash" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z"/></svg>
                </div>
            </div>
        </div>
}
