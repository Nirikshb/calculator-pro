import { useState } from 'react'
import './App.css'

function App() {
  const [display, setDisplay] = useState('');
  const [calcuate, setCalculate]=useState([]);
  const [num1, setNum1] = useState("")

  const handleChange = (e) => {
    //a destructured object to easily point out the "values"
  const {name, value} = e.target;
  //using parseInt to convert the value from string to number
    if(name == "num1") setNum1(parseInt(value));
  };

  const handleClick = ()=>{

    setDisplay();
  }

  return (
    <>
      <h1>Calculator</h1>
      <div className='main'>
        <div className='display'>{display}
        <input type='num' placeholder='Num1' value={num1} onChange={handleChange}></input>
        {/* Input Field */} </div>
         
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
