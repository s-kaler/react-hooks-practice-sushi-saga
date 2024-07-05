import React, {useState} from "react";

function Sushi({name, img, price, onSushiClick, budget}) {
  const [isEaten, setEaten] = useState(false)
  function handleClick(){
    if(budget >= price) {
      setEaten(true);
      onSushiClick(price)
    }
  }
  return (
    <div className="sushi">
      <div className="plate" >
        {/* Tell me if this sushi has been eaten! */}
        {isEaten ? null : (
          <img
            src={img}
            alt={name}
            width="100%"
            onClick={handleClick}
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
