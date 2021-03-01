import React from 'react';
import './Cart.css';

const Cart = (props) => {
   
//  const  { name , salary} = props.cart;

    let cart = props.cart;
    let totalBudget =0
    for (let i =0; i<cart.length; i++){
        const element = cart[i];
        totalBudget+= element.salary;
    }

    return (
        <div className='cart-info'>
            <h2>Member Added:{cart.length}</h2>
            <h2>Total Budget: BDT/-{totalBudget}</h2>

        </div>
    );
};

export default Cart;