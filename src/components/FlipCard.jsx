import React, {useState} from 'react'

export default function FlipCard({children}) {

    const [isActive, setIsActive] = useState(false);

    const handleClick = (e) => {
      e.preventDefault();
      setIsActive(!isActive);
      console.log({ isActive });
    };
  
    return (
        
    <div className={`single-card ${isActive ? "flip" : ""}`}
      onClick={handleClick}
    >
      {children}
    </div>
    )
}
