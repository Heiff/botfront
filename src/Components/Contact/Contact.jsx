import React from 'react'
import styled from 'styled-components'
import Navbar from '../Navbar/Navbar'

const Contact = () => {
  return (
    <Edit>
        <Navbar/>
        <div className='card'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum voluptatibus inventore harum doloribus magnam molestiae odit, neque ab eos nulla velit officiis, voluptas modi impedit delectus mollitia itaque quas aspernatur voluptate est! Enim est neque quas esse harum quaerat amet!</p>
          <h1>Men bilan boglanish: +998900243639</h1>
        </div>
    </Edit>
  )
}
const Edit = styled.div`
    .card{
      width: 90%;
      margin: 0 auto;
    }
    .card h1{
      font-size: 20px;
      font-weight: 400;
    }

`

export default Contact