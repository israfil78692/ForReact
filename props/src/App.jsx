import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card'

function App() {
  const [count, setCount] = useState(0)
  let myobj={
    name:'saif',
    btnText:'clickme'

  }

  return (
    <>
     <h1 className='bg-slate-500 text-black p-4 rounded-xl m-5'>hello</h1>
      <Card username="saig" btntext1={myobj.btnText}/>
      <Card username="aahil"/>
      <Card username="aftab"/>
      <Card username="no-one"/>

    </>
  )
}

export default App
