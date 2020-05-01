import React from "react";

const Heart = () => {
  return(
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path fill="darkgold" stroke="orange" stroke-width="3" 
        d="M 10,30
          A 20,20 0,0,1 50,30
          A 20,20 0,0,1 90,30
          Q 90,60 50,90
          Q 10,60 10,30 z" />
    </svg>
  )
}


export default Heart;
