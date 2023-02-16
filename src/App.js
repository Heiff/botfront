import React from 'react'
import Prop from './Prop'
import { Route,Routes } from 'react-router-dom'
import Contact from './Components/Contact/Contact'
import About from './Components/About/About'
import Params from './Components/Params/Params'

const App = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Prop/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/:id' element={<Params/>}/>
        </Routes>
    </div>
  )
}

export default App