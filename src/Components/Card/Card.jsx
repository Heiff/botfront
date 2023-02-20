import React, { useContext, useState } from "react";
import "./Card.css";
import Button from "../Button/Button";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Context } from "../../Context";




function Card({ food, onAdd, onRemove }) {
  const {goTop} = useContext(Context);
  const [count, setCount] = useState(0);
  const { title, image, price } = food;

  const handleIncrement = (el) => {
    setCount(count + 1);
    onAdd(food);
  };
  const handleDecrement = (id) => {
    setCount(count - 1);
    onRemove(food);
  };
   
  const sale = price * 1

  return (
    <Edit>
    <div className="card">
      <span className={`${count !== 0 ? "card__badge" : "card__badge--hidden"}`}>
        {count}
      </span>
      <div className="image">
        <img src={image} alt='' />
      </div>
      <h4>{title} </h4>
      <h5>{sale.toFixed()}.000 Uzs</h5>
      <Link to={`/${food.id}`} onClick={()=>goTop()}>
        Malumot
      </Link>  
      <div className="btn-container">
        <Button title={"+"} type={"add"} onClick={handleIncrement} />
        {count !== 0 ? (
          <Button title={"-"} type={"remove"} onClick={handleDecrement} />
        ) : (
          ""
        )}
      </div>
    </div>
    </Edit>
  );
}
const Edit = styled.div`
  .card a{
    display: flex;
    justify-content: center;
    padding-bottom: 7px;
    color: gold;
  }
  h4{
    min-height: 38px;
    font-size: 14px;
    margin: 0 auto;
    font-weight: 400;
    display: flex;
    justify-content: center;
  }
  h5{
    font-size: 14px;
    padding: 5px 0;
    margin: 0;
    display: flex;
    justify-content: center;
  }
.card {
  text-align: center;
  width: 140px;
  min-height:265px;
  border: 2px solid var(--primary-color);
  padding: 0.5rem 0.3rem;
  margin: 13px 10px;
  position: relative;
  border-radius: 5px;
  box-shadow: 4px 5px 3px yellow;
}



.image{
  width: 80%;
  max-height: max-content;
  margin: 0 auto;
}

.image img {
  border-radius:7px ;
  width: 100%;
  object-fit: cover;
}

.btn-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
}



.card__badge {
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  height: 40px;
  background-color: rgb(227, 112, 30);
  border-radius: 50%;
  transform: translate(20px, -20px) scale(1);
  color: #fff;
  font-weight: bold;
  text-align: center;
  border: 2px solid rgb(227, 112, 30);
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  animation: scaleanimation 1s ease infinite;
  opacity: 0.8;
}

@keyframes scaleanimation {
  to {
    transform: translate(20px, -20px) scale(1.05);
    opacity: 1;
  }
}

.card__badge--hidden {
  display: none;
}


`

export default Card;
