import React from 'react';
import logo from '../../images/logo.png'
import './header.css'

const Header = () => {


    
    return (
        <div className ="header">
          <div className ="headerImg">
          <img src={logo} alt="" />
          </div>
            <nav>

                <a href="/shop">shop</a>
                <a href="/order">order review</a>
                <a href="/inventory">manage inventory here</a>
            </nav>
           
        </div>
    );
};

export default Header;