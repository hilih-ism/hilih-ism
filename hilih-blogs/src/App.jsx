import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar.jsx'
import Card from "./components/card.jsx";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
        <Card/>
        <button onClick={() => setCount((count) => count + 1)}>
          buy me a potato {count}
        </button>
     </>
  )
}

export default App
