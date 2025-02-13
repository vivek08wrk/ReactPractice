import { useState } from 'react'


function CounterApp(){
  const[count , setCount] = useState(0);
  return(
    <div>
      <h1>count: {count}</h1>
      <button onClick = {()=>setCount(count+1)}>Increase</button>
      <button onClick = {()=>setCount(count-1)}>Decrease</button>
      <button onClick = {()=>setCount(0)}>Reset</button>
    </div>  
  )
};

export default CounterApp;


