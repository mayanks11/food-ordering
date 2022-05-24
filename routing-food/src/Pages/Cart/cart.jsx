import "../Order/order";
import "./cart.css";
import {useState, useEffect } from "react";
import axios from 'axios';
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
            <button className = "button"  onClick={() => {deleteItem(cartItems._id); refreshPage() } }>Remove from cart</button>
            
          </div>
        
          </ul>
          
        ))
        
      }
      
      <button className = "button"  onClick={() => {deleteAllItem(); refreshPage() } }>Empty the cart</button>
        {/* <p>Total amount: {totalAmount}</p> */}
        <button className = "button" onClick={()=>{ order()}}>Place Order</button>
         </div>
         </div>
     )
    }
    
export default Cart;