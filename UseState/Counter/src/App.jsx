
import { useState } from 'react'
import './App.css'

function App() {
  let [count,setCount]=useState(5)
  let addValue=()=>{
    
    setCount(count+1)
  }

  let removeValue=()=>{
    if(count<=0)return 0
    setCount(count-1)
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter value:{count}</h2>
      <button onClick={addValue}>add a number:{count}</button>
      <button onClick={removeValue}>remove a value:{count}</button>
      <p>count={count}</p>
    </>
  )
}

export default App
