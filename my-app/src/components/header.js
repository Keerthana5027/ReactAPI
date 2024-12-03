import { Link } from "react-router-dom"


const Header =() =>{
    
    return(
    <>
         {/* <header>Cities</header> */}
         <header class="header"> 
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX4Z-XnRSUormwhMx4ImtoI09rLrcQaa3G4g&s" alt="Company Logo" class="logo"/> 
            <h1 class="company-name">E-Commerce</h1> 
            <div class="auth-buttons"> 
                <Link to="sign-in"><button class="btn">sign In</button></Link>
                <Link to="sign-out"><button class="btn">sign Out</button></Link>
            </div>
            </header>
    </>
    ) 
   }
export default Header