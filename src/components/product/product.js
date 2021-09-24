import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import './product.css'
import Rating from 'react-rating';
const Product = (props) => {
    const element = <FontAwesomeIcon icon={faShoppingBag} />
    // console.log(props.products);
    const{name,img,price,seller,star,stock} = props.products
    return (
        <div className ="product">
           <div>
<img src={img} alt="" />
           </div>
           <div className ="product-Details">
                 <h5>{name}</h5>
                 <p><small>by:{seller}</small></p>
                 <p className ="price">$<span>{price}</span></p>
                 <p>only <span>{stock}</span> left in stock - order soon</p>
               <Rating
                 initialRating={star}
                 readonly
                 emptySymbol="far fa-star"
                 fullSymbol="fas fa-star "
               
               ></Rating> <br />
                 <button onClick ={() => props.addtocart(props.products)}>{element}add to cart</button>

           </div>
        </div>
    );
};

export default Product;