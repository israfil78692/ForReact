import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    
    <div className='w-full h-screen duration-200'
    style={{backgroundColor:color}}
    > 
    <div className="fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
          <button onClick={()=>setColor("red")} 
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:'red'}}>Red</button>
          <button onClick={()=>setColor("green")} 
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:'green'}}>Green</button>
          <button onClick={()=>setColor("yellow")} 
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:'yellow'}}>yellow</button>
          <button onClick={()=>setColor("blue")} 
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:'blue'}}>blue</button>
          <button onClick={()=>setColor("maroon")} 
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:'maroon'}}>maroon</button>
        </div>
    </div>
    </div>
  )
}

export default App
