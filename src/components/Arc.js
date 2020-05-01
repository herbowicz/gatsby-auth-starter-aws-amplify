import React from "react";

const Arc = () => {
  return(
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path fill="black" stroke="orange" stroke-width="3" 
        d="M 30,50
          A 20,20 0,0,1 70,50
          A 20,20 0,0,1 30,50 z" />
    </svg>
  )
}


export default Arc;
