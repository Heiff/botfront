import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Context } from '../../Context';
import Navbar from '../Navbar/Navbar';
import { getData } from '../../db/db';
const array = getData()
const Params = () => {
    const {goTop} = useContext(Context)
    const param = useParams();
    const sell = array.find(el => {
      return el.id == param.id;
  })

  return (
    <Edit>
        <Navbar/>
    <div className='card'>
        <h1>{sell.title}</h1>
        <div className='imgs'>
        <img src={sell.image} alt=''/>
        </div>
        <h2>{sell.desc}</h2>
        <div className='price'>
        <h3>Narxi: {sell.price} Uzs</h3>
        <Link to='/' onClick={()=>goTop()}><p>sotib olishga oting <span>!!!</span></p></Link>
        </div>
    </div>
    </Edit>
  )
}
const Edit = styled.div`
.card a{
    text-decoration: none;
}
.price{
    display: flex;
    justify-content: space-between;
}
.price p{
    color: white;
    border: 1px solid gold;
    padding: 2px 10px 4px 10px;
    border-radius: 5px;
    align-items: center;
    display: flex;
    justify-content: center;
}
.price span{
    padding-left: 2px;
    color: red;
    font-size: 16px;
    font-weight: 700;
}
.price p:hover{
    background: white;
    color: black;
    border: 1px solid red;
}
.imgs{
    display: flex;
    justify-content: center;
}
.card{
    width: 90%;
    margin: 0 auto;
}
.card h1{
    display: flex;
    justify-content: center;
    font-size: 24px;
    font-weight: 400;
    color: gold;
}
.card img{
    border-radius: 10px;
    border: 3px solid gold;
}
.card h2{
    display: flex;
    justify-content: flex-start;
    font-size: 15px;
    padding-left:15px ;
    font-weight: 400;
}
.card h3{
    font-size: 16px;
    padding-left: 15px;
    font-weight: 400;
    color: gold;
}
`

export default Params