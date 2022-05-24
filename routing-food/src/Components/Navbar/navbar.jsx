import {NavLink} from "react-router-dom";
import "./navbar.css";
const Navbar = () =>{
    return (
        <>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        
          <NavLink to = "/" className="navbar-brand">Food Order
          </NavLink>
          
          <button class=" navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
             {/* <a class="a-nav nav-link active" aria-current="page" href= "">Order Now</a> */}
             <NavLink to = "/order" className="a-nav nav-link active">Order Now</NavLink>
            
             
            
          </li>
          <li class="nav-item">
            <a class="a-nav nav-link active" href="mailto:mayank31rbt@gmail.com">Contact Us</a>
          </li>        
        </ul>
        </div>
      
    </nav>
        </>
    )
}

export default Navbar;