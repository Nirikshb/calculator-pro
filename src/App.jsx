import { useState } from 'react'
import './App.css'

function App() {
  const [display, setDisplay] = useState('');
  const [calcuate, setCalculate]=useState([]);

  const handleClick = ()=>{
    setDisplay();
  }

  return (
    <>
      <h1>Calculator</h1>
      <div className='main'>
        <div className='display'>{display}{/* Input Field */} </div>
         
       <p className='keypad'>
          <button >AC</button>
          <button >+</button>
          <button >-</button>
          <button >*</button>
          <button >7</button>
          <button >8</button>
          <button >9</button>
          <button >4</button>
          <button >5</button>
          <button >6</button>
          <button >1</button>
          <button >2</button>
          <button >3</button>
          <button >0</button>
          <button >.</button>
          <button >=</button>    
          </p>
      </div>
     
    </>
  )
}

export default App
