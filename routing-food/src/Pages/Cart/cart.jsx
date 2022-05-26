import "../Order/order";
import "./cart.css";
import {useState, useEffect } from "react";
import axios from 'axios';
import {NavLink} from 'react-router-dom';
const Cart = () =>{
    const [cartItems, setCartItems] = useState([]);
    function refreshPage() {
        window.location.reload(false);
      }
    function order(){
        alert("Your order has been placed");
    }
    useEffect(()=>{
        const getCartItem = async ()=>{
          try {
            const res = await axios.get(`http://localhost:4000/api/carts`)
            setCartItems(res.data)
            // console.log('render')
          } catch (error) {
            console.log(error)
          }
        }
        getCartItem()
     },[]);
    
     const deleteItem = async (id) => {
        try {
          const res = await axios.delete(`http://localhost:4000/api/cart/${id}`)
         //  console.log(res.data)
         const newListItem = cartItems.filter(item=>item.id !== id);
         setCartItems(newListItem);
        } catch (error) {
          console.log(error)
        }
        
      }
      const deleteAllItem = async () => {
        try {
          const res = await axios.delete(`http://localhost:4000/api/empty`)
         //  console.log(res.data)
         
        } catch (error) {
          console.log(error)
        }
        
      }
    //   const totalAmount={
    //      setCartItems.price.sum()
    // }
     return(
         <div className="cart">
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
        {/* <li className="nav-item">
        <NavLink to = "/cart" className="a-nav nav-link active">Cart</NavLink>
        </li> */}

        <li className="nav-item">
          <a className="a-nav nav-link active" href="mailto:mayank31rbt@gmail.com">Contact Us</a>
        </li>        
      </ul>
      </div>
    
  </nav>
        <div className="content">
         <h1>Cart</h1>
         <br/>
         <h3>Items in your cart</h3>
         
         
      {
        
        cartItems.map((cartItems => 
          //  <div>
          //  <p className="content">{foodItems.item}</p>
          //  <p className="content">{foodItems.price}</p>
          //  </div>
           
          <ul className="cart-items">
          <div className="food-content">
            <li className="item">{cartItems.item}</li>
            <li className="item">{cartItems.price}</li>
            <button className = "button btn btn-dark"  onClick={() => {deleteItem(cartItems._id); refreshPage() } }>Remove from cart</button>
            
          </div>
        
          </ul>
          
        ))
        
      }
      
      <button className = "button btn btn-primary"  onClick={() => {deleteAllItem(); refreshPage() } }>Empty the cart</button>
        {/* <p>Total amount: {totalAmount}</p> */}
        <button className = "button btn btn-primary" onClick={()=>{ order()}}>Place Order</button>
        <NavLink to = "/order" className="btn btn-primary">Add more food
        </NavLink>
         </div>
         </div>
     )
    }
    
export default Cart;