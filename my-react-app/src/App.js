import { useState } from 'react';
import './App.css';
import { CartContext } from './context';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from './pages/MainPage';
import CartPage from './pages/CartPage';

function App() {
  const [cart, setCart] = useState([])

  const addToCart = (elem)=>{
    let itemId = cart.indexOf(cart.find(cart => cart.id === elem.id))
    
    if(itemId !== -1) {
      let tmp = [...cart]
      tmp[itemId].count = elem.count
      setCart(tmp)
    }
    else {
      setCart([...cart,elem])
    }
  }

  return (
    <CartContext.Provider value={{ cart: cart, addToCart: addToCart, setCart: setCart }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/cart" element={<CartPage/>} />
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
    
  );
}

export default App;
