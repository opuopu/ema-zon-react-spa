import React, { useEffect, useState } from 'react';
import Cart from '../../cart/Cart';
import Product from '../../product/product';
import {addToDb, getStoredCart} from '../../../utilities/fakedb';
import './shop.css'

const Shop = () => {

    const [Products,setProducts] = useState([])
    const[cart,setcart] = useState([])
    const[displayProducts,setdisplayProducts] = useState([])
     useEffect(()=>{

        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => {
            setdisplayProducts(data)
            setProducts(data)})
    },[])

// display data from local stroage super advance
    useEffect(()=>{

        const savedCart = getStoredCart()
    
       if(Products.length){
           let storeproduct = []
        for(const key in savedCart){
            console.log(key);
            const displayProduct = Products.find(pro => pro.key === key )
            

               if(displayProduct){
                   const productQuantity = savedCart[key]
                   displayProduct.quantity = productQuantity
                   console.log(productQuantity);
                storeproduct.push(displayProduct)
               }
               
            }
            setcart(storeproduct)
       }
    },[Products])
// another section to adding cart 
    const addtocart = product =>{
       const newccart =[...cart,product]
       setcart(newccart)
       addToDb(product.key)
    }
    // search event handler
    const handleClick = event =>{
     const searchText = event.target.value
        const searchProduct = Products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()) )
        console.log(searchProduct.length);
        setdisplayProducts(searchProduct)
    }
    return (
        <div>

       <input type="text" className ="search" onChange ={handleClick}/>
    
        <div className ="main-container">
        <div className ="product-container">

{
    displayProducts.map(product => <Product products ={product} key = {product.key} addtocart ={addtocart}/>)
}
        </div>
        <div className="cart-container">
<Cart cart ={cart} />
        </div>
        </div>
        </div>
    );
   
};


export default Shop;