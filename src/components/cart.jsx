import React from "react";
import '../styles/cart.css';
import { useState, useEffect } from "react";

function Cart ({ cart, setCart, setShow }) {

    const [price, setPrice] = useState(0);

    const removeItem = (id) => {
        const newCart = cart.filter((item) => item.id !== id);
        setCart(newCart);
    }

    const increaseAmount = (id) => {
        const newCart = cart.map((item) => {
            if(item.id === id){
                return {...item, amount: item.amount + 1};
            }
            return item;
        });
        setCart(newCart);
    }

    const decreaseAmount = (id) => {
        const newCart = cart.map((item) => {
            if(item.id === id){
                return {...item, amount: item.amount - 1};
            }
            return item;
        });
        setCart(newCart);
    }

    useEffect(() => {
        let newPrice = 0;
        cart.forEach((item) => {
            newPrice += item.price * item.amount;
        });
        setPrice(newPrice);
    }, [cart]);

    return (
        <div>
            {cart?.map((item) => (
                <div className="cart-box" key={item.id}>
                    <div className="cart-img">
                        <img src={item.img} alt={item.title} />
                        <div className="cart-info">
                            <h3 className="cart-title">{item.title}</h3>
                            <h4 className="cart-author">{item.author}</h4>
                            <h4 className="cart-price">₹{item.price}</h4>
                            <div className="cart-amount">
                                <button onClick={() => decreaseAmount(item.id)}>-</button>
                                <span>{item.amount}</span>
                                <button onClick={() => increaseAmount(item.id)}>+</button>
                            </div>
                            <button className="cart-remove" onClick={() => removeItem(item.id)}>Remove</button>
                            
                        </div>
                            </div>
                            <div className="cart-total">
                            <h4 className="cart-total-price">Total: ₹{item.price * item.amount}</h4>
                        </div> 
                    </div>

                       
            ))}
            <div className="cart-summary">
                <h3>Total: ₹{price}</h3>
            </div>
        </div>
    );
}

export default Cart;