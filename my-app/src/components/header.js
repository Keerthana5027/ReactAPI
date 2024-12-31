import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
        
    return (
        <>
            <header className="header"> 
                <Link to="/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTopsCXC1uzDDiNiVvsI75RDN5rQZfLxgvGbA&s" 
                alt="Company Logo" className="logo"/> </Link>
                <h1 className="company-name">E-Commerce</h1> 
                <div className="auth-buttons"> 
                    <Link to="sign-in"><button className="btn btn-warning">Sign In</button></Link>
                    <Link to="/"><button class="btn btn-warning">Sign Out</button></Link>
                </div>
            </header>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/tableproduct">Products</Link>
                <Link to="/deals">Deals</Link>
                <Link to="#" >Contact Us</Link>
            </div>
            <div className="banner"> Special Offers and Discounts </div>
        </>
    );
}
export default Header;