import React, {useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [plates, setPlates] = useState([]);
  
  const [budget, setBudget] = useState(80)

  function handleSushiClick(price){
    setPlates([...plates, price])
    setBudget(budget - price)
  }
  return (
    <div className="app">
      <SushiContainer handleSushiClick={handleSushiClick} budget={budget}/>
      <Table plates={plates} budget={budget}/>
    </div>
  );
}

export default App;
