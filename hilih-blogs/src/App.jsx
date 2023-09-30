import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function Navbar(){
    return(
    <div className="navbar">
        <h2>Home</h2>
        <h2>Blogs</h2>
        <h2>About me</h2>
        <h2>Contact</h2>
    </div>
    )
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
        <button onClick={() => setCount((count) => count + 1)}>
          buy me a potato {count}
        </button>
     </>
  )
}

export default App
