import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increment(){
    setCount (prevCount => prevCount + 1)
  }
  function decrement(){
    setCount (count - 1)
    if(count <=1){
      setCount (0)
    }
  }
  function reset(){
    setCount(0)
  }
  

  return (
    <div className="container">
      <div className="wrap">
        <h1 className="count-el">{count}</h1>
        <button onClick={increment} className="increment">INCREMENT</button>
        <button onClick={decrement}  className="decrement">DECREMENT</button>
        <button onClick={reset}  className="reset">RESET</button>
      </div>
    </div>
  );
}

export default App;
