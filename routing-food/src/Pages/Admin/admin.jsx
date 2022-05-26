import "./admin.css";
import React, {useEffect,useState} from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom';


function Admin (){
  const [itemText, setItemText] = useState('')
  const [itemPrice, setItemPrice] = useState()
  const [Food,setFood] = useState([])
  const [foodItems, setFoodItems] = useState([]);
  const [isUpdating, setIsUpdating] = useState('');
  const [updateItemText, setNewItemText] = useState('');
  const [updateItemPrice, setNewItemPrice] = useState();
  const [cartItems, setCartItems] = useState([]);



  function refreshPage() {
    window.location.reload(false);
  }
  const deleteAllItem = async () => {
    try {
      const res = await axios.delete(`http://localhost:4000/api/empty`)
     //  console.log(res.data)
     
    } catch (error) {
      console.log(error)
    }
    
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
// Add Food Item
   const addItem = async() => {
    //  e.preventDefault();
     console.log('dfsdfds')
     try {
       const res = await axios.post(`http://localhost:4000/api/item`,{item: itemText, price: itemPrice})
        console.log(res);
       setFoodItems(prev => [...prev, res.data]);
      // setListItems(prev => [...prev, res.data])
     } catch (error) {
       console.error(error);
     }
   }

// Display all food items
   useEffect(()=>{
      const getFoodItem = async ()=>{
        try {
          const res = await axios.get(`http://localhost:4000/api/items`)
          setFoodItems(res.data)
          // console.log('render')
        } catch (error) {
          console.log(error)
        }
      }
      getFoodItem()
   },[]);

   // Delete items
   const deleteItem = async (id) => {
     try {
       const res = await axios.delete(`http://localhost:4000/api/item/${id}`)
      //  console.log(res.data)
      const newListItem = foodItems.filter(item=>item.id !== id);
      setFoodItems(newListItem);
     } catch (error) {
       console.log(error)
     }
     
   }

   // Update items

   const updateItem = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`http://localhost:4000/api/item/${isUpdating}`, {item: updateItemText, price: updateItemPrice})
      
      console.log(res.data);
      setNewItemText('');
      setIsUpdating('');
      setNewItemPrice('');
    } catch (error) {
      console.log(error);
    }
  }


   const renderUpdateForm = () => {
    

    return <form className = "update-form" onSubmit={(e)=>{updateItem(e)}}>
      <input className = "update-new-input" type="text" placeholder = "New Item" onChange={e => {setNewItemText(e.target.value)}} value={updateItemText}/>
      <input className = "update-new-input" type="text" placeholder = "New Item Price" onChange={e => {setNewItemPrice(e.target.value)}} value={updateItemPrice}/>
      <button className = "update-new-btn" type="submit" onClick={refreshPage}>Update</button>
    </form>
    
  }

  return (
    <div className="App">
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
      <h1>Admin Page</h1>

      <p>Add Food Items</p>
    
      <form className="top">
        <input className = "form-input" type="text" placeholder="Food Name" name="item" onChange={(e)=>{setItemText(e.target.value)}}/>
        <input className = "form-input" type="text" placeholder="Food Price" name="item-price" onChange={(e)=>{setItemPrice(e.target.value)}}/>
        <button className = "form-button btn btn-success" type="submit" onClick={e => {addItem()}}>submit</button>
      </form>
      <br/>

      <div className = "middle">
        <h2>List of Food Items</h2>
        <p>Delete or Update the food items</p>
        
          {
            foodItems.map(foodItem =>(
              <div className = "Food Items">
              {
                isUpdating === foodItem._id ? renderUpdateForm():
                <>
                  
                  <ul>
                  <li className = "food-content">{foodItem.item}</li>
                  <li className = "food-content">{foodItem.price}</li>
                  <button className = "button btn btn-danger"  onClick={() => {deleteItem(foodItem._id); refreshPage() } }>Delete</button>
              <button className = "button btn btn-warning" onClick = {() => {setIsUpdating(foodItem._id)}}>Update</button>  
                  </ul>
                  
                            
                </>
              }
              </div>
            ))
          }
        
      </div>

      <h3>Order in system</h3>
      {
      cartItems.map((cartItems => 
          //  <div>
          //  <p className="content">{foodItems.item}</p>
          //  <p className="content">{foodItems.price}</p>
          //  </div>
           
          <ul className="cart-items">
          <div className="food-content">
            <li className="item">{cartItems.item}</li>
            
          </div>
        
          </ul>
          
        ))
      }

    <button className = "button btn btn-info"  onClick={() => {deleteAllItem(); refreshPage() } }>Complete order</button>
      </div>
      
      
    
    
    
  );
}
export default Admin;