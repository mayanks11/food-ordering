import "./home.css";
import "../../Components/Navbar/navbar.css";
import {NavLink} from "react-router-dom";
import food from '../../imgs/food.jpg';
import burger from '../../imgs/burger.jpg';
import biryani from '../../imgs/biryani.jpg';
import pizza from '../../imgs/pizza.jpg';
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
   integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous"/>
const Home = () =>{
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
        <div className="middle-container">
      <img src = {food} alt="food" className="middle-img"/>
      <h2 className="middle-h2">Order delicious food within minutes!!!</h2>
      <p className="middle-p">Ordering food is now as easy as eating it</p>

    </div>

    <div className="bottom-container">
      <div class="row">
      <div class="col-lg-4">
        <div class="card">
          <div class="card-body">
            <img src = {burger} class="burger-img card-title" alt="burger"/>
            <p class="card-text">Cheese Burger <br/> Just at Rs. 60</p>
            <NavLink to = "/order" className="btn btn-primary">Order Now</NavLink>
          </div>
        </div>
      </div>

      <div class="col-lg-4">
    <div class="card">
      <div class="card-body">
        <img src = {biryani} class="biryani-img card-title" alt="biryani"/>
        <p class="card-text">Chicken Biryani <br/> Just at Rs. 70</p>
        <NavLink to = "/order" className="btn btn-primary">Order Now</NavLink>
      </div>
    </div>
  </div>
  <div class="col-lg-4">
    <div class="card">
      <div class="card-body">
        <img src = {pizza} class="pizza-img card-title" alt="Pizza" />
        <p class="card-text">Cheese burst pizza <br/> Just at Rs. 120</p>
        <NavLink to = "/order" className="btn btn-primary">Order Now</NavLink>
      </div>
    </div>
  </div>
</div>
    <h3 className="bottom-p">This could be your next meal😋😋</h3>
    </div>
        
    </>
    );
};
export default Home;