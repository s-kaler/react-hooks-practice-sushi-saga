import React, { useEffect, useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({handleSushiClick, budget}) {
  const [sushis, setSushis] = useState([])
  const [sushiIndex, setIndex] = useState(0)
  
  useEffect(() => {
    fetch("http://localhost:3001/sushis")
    .then((res) => res.json())
    .then((fetchedSushis) => setSushis(fetchedSushis))
  }, [])

  function handleMore(){
    setIndex(sushiIndex + 4)
  }

  return (
    <div className="belt">
      {sushis.slice(sushiIndex,(sushiIndex+4)).map((sushi) => (
          <Sushi 
            name={sushi.name}
            img={sushi["img_url"]}
            price={sushi.price}
            key={sushi.id}
            onSushiClick={handleSushiClick}
            budget={budget}
          />
        ))
      }
      <MoreButton handleClick={handleMore}/>
    </div>
  );
}

export default SushiContainer;
