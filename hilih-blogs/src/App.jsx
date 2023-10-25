import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar.jsx'
import Card from "./components/card.jsx";

function App() {
  return (
    <>
      <Navbar/>
        <div className={"card-container"}>
            <Card/>
            <Card/>
            <Card/>
        </div>
     </>
  )
}

export default App
