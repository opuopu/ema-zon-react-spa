import React from 'react';
import './cart.css'

const Cart = (props) => {
   const products = props.cart
   let total = 0
   let shipping = 0
   let grandTotal = 0

   for(const product of products ){
   total = total + product.price
  
     shipping = shipping + product.shipping
     grandTotal =   total + shipping
   }
  

    
    return (
        <div>
          <div className ="cart-header">
          <h3>order summery</h3>
          <p>items order:{props.cart.length}</p>
         
          </div>
          <div>

              <p>items: ${total.toFixed(2)}</p>
              <p>shipping and handeling: ${shipping.toFixed(2)}</p>
              <p>total before tax: ${}</p>
              <p>estimated tax: {}</p>

              <h4>order Total ${grandTotal.toFixed(2)}</h4>
              </div>
        </div>
    );
};

export default Cart;