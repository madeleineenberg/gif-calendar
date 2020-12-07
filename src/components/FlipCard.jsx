import React, {useState} from 'react'

export default function FlipCard({children, number}) {

    const [isActive, setIsActive] = useState(false);
    let num = number + 1;
    let today = new Date().getDate();
    

    const handleClick = (e) => {
      e.preventDefault();
      if(num <= today){
        setIsActive(!isActive);
      }
      else{
        return false;
      }
    };
  
    return (
        
    <div className={`single-card ${isActive ? "flip" : ""}`}
      onClick={handleClick}
    >
      {children}
    </div>
    )
}
