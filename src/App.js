import Navbar from './components/navbar';
import Shop from './components/shop';
import Cart from './components/cart';
import {useState} from 'react';
import './App.css';
function App() {

  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);
  const [show , setShow] = useState(true);

  

  const addToCart= (item) =>{
    let isPresent = false;
    cart.forEach((cartItem) => {
      if(cartItem.id === item.id){
        isPresent = true;
      }
    });
    if(isPresent){
      console.log("Item is already in cart");
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      } , 2000);
      return;
    }else{
      item.amount = 1;
      console.log(item);
      setCart([...cart, item]);
    }
  };
  return (
    <div className="App">
      <Navbar size={cart.length} setShow={setShow}/>{
        show ? <Shop addToCart={addToCart}/> : <Cart cart={cart} setCart={setCart} setShow={setShow}/>
      }
      
      {warning && <div className="warning">Item is already in cart</div>}
    </div>
  );
}

export default App;
