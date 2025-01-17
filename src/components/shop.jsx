import React from 'react';
import list from '../list';
import '../styles/shop.css';
const Shop = ({ addToCart }) => {

    return (
        <section className="container">
            {list.map((item) => {
                const {id, title, author, price, img} = item;
                return(
                    <article key={id} className='product'>
                    <img src={img} alt={title} className='product-img' />
                    <div className='product-info'>
                        <h4 className='product-title'>{title}</h4>
                        <h5 className='product-author'>{author}</h5>
                        <h5 className='product-price'>₹{price}</h5>
                        <button className="add-to-cart" onClick={() => addToCart(item)}>Add to cart</button>
                    </div>
                </article>
            )}
            )}
        </section>
    );
}

export default Shop;