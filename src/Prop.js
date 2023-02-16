import { useState, useEffect } from "react";
import "./App.css";
import Card from "./Components/Card/Card";
import Cart from "./Components/Cart/Cart";
import styled from "styled-components";
import axios from 'axios'
import { getData } from "./db/db";


const Data = getData();


const tele = window.Telegram.WebApp;

function Prop() {
  const [cartItems, setCartItems] = useState([]);
  const [name,setName] = useState('')
  const [number,setNumber] = useState('')
  const bot = '5899734443:AAGUk7K0k4Gpw_FiF8E9q9SUcJs61ZT9TW0'
  const chat = '5762202354'
  const [show,toggleShow] =useState(false);
  const handleClick = () =>{
    toggleShow((prev)=>!prev)
  }

  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);



  useEffect(() => {
    tele.ready();
  });

  const registers = () => {
    axios.post( 
      `https://api.telegram.org/bot${bot}/sendMessage?chat_id=${chat}&text=${encodeURIComponent(
    `
    <b>Zakazlar:</b>
    <b>${name}</b>
    <b>${number}</b>
    <b>Umumiy Hisob: ${totalPrice}.000 Uzs</b>

${cartItems
  .map((el) => {
    return `
    <b>${el.title} mahsuloti</b>
    <b>narxi: ${el.price}.000 Uzs</b>

    `;
  })
  .join("")}        
    `
      )} &parse_mode=html`
    );
    setTimeout(() => {
      handleClick()
      alert('zakaz olindi');
    }, 600);
  };


  const onAdd = (food) => {
    const exist = cartItems.find((x) => x.id === food.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === food.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...food, quantity: 1 }]);
    }
  };

  const onRemove = (food) => {
    const exist = cartItems.find((x) => x.id === food.id);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((x) => x.id !== food.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === food.id ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      );
    }
  };

 

  return (
    <Edit>
      <Cart cartItems={cartItems} handleClick={handleClick} show={show} toggleShow={toggleShow}  totalPrice={totalPrice} setName={setName} setNumber={setNumber} number={number} registers={registers}/>
      <div className="cards">
        {Data.map((food) => {
          return (
            <div>
            <Card food={food} key={food.id} onAdd={onAdd} onRemove={onRemove} />    
            </div>     
          );
        })}
      </div>
    </Edit>
  );
}
const Edit = styled.div`
a{
  text-decoration: none;
}
h1{
  display: flex;
  justify-content: center;
  margin: 10px 0;
}
.cards{
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2,1fr);
}
`

export default Prop;
