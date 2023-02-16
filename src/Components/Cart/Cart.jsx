import React from "react";
import "./Cart.css";
import Button from "../Button/Button";
import styled from "styled-components";
import Navbar from "../Navbar/Navbar";

function Cart({ cartItems, totalPrice,number,setName,setNumber,registers,handleClick,show, }) {
  
  
  return (
    <Edit>
      <Navbar/>
       <h1>{cartItems.length === 0 ? "Hech nma yoq" : ""}</h1>
    <div className="cart__container">     
       <span className="">Umumiy hisob: {totalPrice.toFixed(3)} Uzs</span>
       <Button
        title={`${cartItems.length === 0 ? "Tanlang !!!" : "Sotib Olish"} `}
        type={"checkout"}
        disable={cartItems.length === 0 ? true : false}
        onClick={handleClick}
      />
      
      {show &&  
      <div className="inputs">
        <i onClick={handleClick} class="fa-solid fa-xmark"></i>  
         <input type='text' onChange={(e) => setName(e.target.value)} placeholder='Ismingiz ?'/> 
         <input type='number' onChange={(e)=>setNumber(e.target.value)} placeholder='Raqamingiz ?'/>
        <button onClick={registers} disabled={number.length < 12}>Buyurtma</button>
      </div>
      }
    </div>
    </Edit>
  );
}

const Edit = styled.div`
  i{
    color:gold;
    display: flex;
    justify-content: flex-end;
    font-size: 17px;
    padding:5px 10px;
  }
  h1{
    display: flex;
    justify-content: center;
    font-size: 16px;
    margin: 5px 0 10px 0;
    font-weight: 400;
  }
  .inputs button{
    width: 100px;
    margin: 0 auto;
  }
  .inputs input{
    margin: 0 40px;
  }
  .inputs{
    position: absolute;
    display:grid;
    grid-template-columns: repeat(1,1fr);
    gap: 10px 0;
    background: white;
    border-radius: 10px;
    padding-bottom: 20px;
    z-index: 1;
    margin-top: 170px;
  }

`

export default Cart;
