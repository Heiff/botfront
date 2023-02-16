import React from 'react'
import styled from 'styled-components'
import Navbar from '../Navbar/Navbar'
const About = () => {
  return (
    <Edit>
        <Navbar/>
        <div className='card'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, rem. Laborum id vitae aspernatur officiis quos vel, eius neque cum necessitatibus qui tempora quasi excepturi, tempore voluptates suscipit earum accusamus dolore fugit doloribus error! Cum quibusdam perferendis qui, ea, at molestias pariatur assumenda velit quod a ullam. Unde laborum obcaecati, quia, exercitationem maiores quos, ullam sapiente dolor necessitatibus est harum excepturi delectus dicta nisi rerum eum? Molestias ut consectetur deleniti provident corrupti modi neque, aliquam voluptas, ratione, quam nemo corporis quas minima! Optio a tenetur minima dolores sapiente ipsa at expedita, non, aspernatur ad corporis deserunt nemo totam laboriosam accusamus.</p>
        </div>
    </Edit>
  )
}
const Edit = styled.div`
   .card{
    width: 90%;
    margin: 0 auto;
   } 

`

export default About