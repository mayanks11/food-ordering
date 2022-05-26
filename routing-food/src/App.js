import  ReactDOM from 'react-dom/client';
import './App.css';
import {  Footer } from "./Components";
import {Home, Order, Admin, Cart} from './Pages';
// import Order from './Order';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById("root")
)

const App = () => {
  return (
    <>
    <Router>
      
      <Routes>
      
        <Route path = "/" element = {<Home />}/>
        <Route path = "/order" element = {<Order />}/>
        <Route path = "/admin" element = {<Admin/>}/>
        <Route path = "/cart" element = {<Cart/>}/>
      </Routes>
       <Footer/>
    </Router>
    
    </>
  );
}

export default App;
