import "./order.css";
import "../../Components/Navbar/navbar.css";
import '../../Components/Navbar/navbar';
import React, {useEffect,useState} from 'react';

import axios from 'axios';
import {NavLink} from 'react-router-dom';
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous"/>
const Order = () =>{
  

  const [foodItems, setFoodItems] = useState([]);
  


    const addToCart = async(id) =>{
      try {
        const res = await axios.get(`http://localhost:4000/api/items/${id}`)
        console.log(res.data.item);
        const abc = await axios.post(`http://localhost:4000/api/cart`, {item: res.data.item, price: res.data.price})
        console.log(abc.data);
  
        } catch (error) {
          console.log(error);
         }
       }




    



  useEffect(()=>{
    const getFoodItem = async ()=>{
      try {
        const res = await axios.get(`http://localhost:4000/api/items`);
        setFoodItems(res.data)
        // console.log('render')
      } catch (error) {
        console.log(error)
      }
    }
    getFoodItem()
 },[]);

    return(
        <div className="order">

<nav class="order-nav navbar navbar-expand-lg navbar-dark bg-dark">
        
        <NavLink to = "/" className="navbar-brand">Food Order
        </NavLink>
        
        <button class=" navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
           {/* <a class="a-nav nav-link active" aria-current="page" href= "">Order Now</a> */}
           <NavLink to = "/" className="a-nav nav-link active">Home</NavLink>
           
          
           
          
        </li>
        <li className="nav-item">
        <NavLink to = "/cart" className="a-nav nav-link active">Cart</NavLink>
        </li>

        <li className="nav-item">
          <a className="a-nav nav-link active" href="mailto:mayank31rbt@gmail.com">Contact Us</a>
        </li>        
      </ul>
      </div>
    
  </nav>
          
        
        <div className="para" >
          <h3>Order your favorites from our wide range of varieties</h3>

      
  
      <div className="row">
      {
        
        foodItems.map((foodItems => 
          //  <div>
          //  <p className="content">{foodItems.item}</p>
          //  <p className="content">{foodItems.price}</p>
          //  </div>
          <div className="col-lg-3 col-md-6">  
          <div className="card">
          <div className="food-content card-body">
            <h5 className="card-title">{foodItems.item}</h5>
            <p className="card-text">{foodItems.price}</p>
            <button class="btn btn-primary" onClick={() =>{addToCart(foodItems._id)}}>Add to cart</button>
          </div>
        
          </div>
          </div>
        ))
      }
      </div>
    </div>        
    </div>
    )
  }

export default Order;