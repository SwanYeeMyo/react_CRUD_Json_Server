import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Create from './CRUD/Create'
import Update from './CRUD/Update'
import Read from './CRUD/Read'
import Nav from './components/navBar/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/update/:id' element={<Update />} />
          <Route path='/read/:id' element={<Read />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
