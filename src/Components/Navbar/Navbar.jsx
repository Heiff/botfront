import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../images/logo.jpg'
import logo2 from '../../images/logo2.png'


const Navbar = () => {
  return (
    <Edit>
    <div className='nav'>
        <div className='nav1'>
        <img src={logo} alt=''/>
        <img src={logo2} alt=''/>
        </div>
        <div className='nav1'>
        <Link to='/'>Главное</Link>
        <Link to='/Contact'>Контакты</Link>
        <Link to='/About'>О нас</Link>
        </div>
    </div>
    </Edit>
  )
}
const Edit = styled.div`
background: white;
.nav1{
  align-items: center;
  display: flex;
}
.nav{
width: 90%;
margin: 0 auto;
display: flex;
justify-content: space-between;
align-items: center;
}
a{
    margin: 0;
    font-size: 14px;
    padding: 0 5px;
    text-decoration: none;
    color: black;
}
img{
    padding: 5px 0;
     width: 60px;
     height: 30px;
}
`

export default Navbar