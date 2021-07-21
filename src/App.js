import "./App.css";
import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const [counter, setCounter] = useState(0);
  const addCount = () => {
    const newCounter = counter +1;
    setCounter(newCounter);
  }

  const lessCount = () => {
    const newCounter = counter -1;
    setCounter(newCounter);
  }

  const resetCount = () => {
    const newCounter = 0;
    setCounter(newCounter);
  }

  return (
    <div>
    <div className="App">
      <Header />
      <div className="counter">
  <div className="line">
      <div className="btn-plus-minus" onClick={lessCount} style={{ visibility: counter >= 1 ? "visible" : "hidden"}}>-</div>
   
     <div className="counter-count">{counter}</div> 
     <div className="btn-plus-minus" onClick={addCount} style={{ visibility: counter < 10 ? "visible" : "hidden"}} >+</div>
      </div>
      </div>
      <div className="btn-reset" onClick={resetCount}>Reset</div>

    <Footer />
    </div>
    </div>
  );
}

export default App;
