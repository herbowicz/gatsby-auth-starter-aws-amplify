import React from "react";

const Download = ({ size, stroke }) => {
  return(
    <svg width={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path fill="none" stroke-width={stroke} stroke-linejoin="round" stroke="black"
        d="m 40,50
          h-20 v40 h60 v-40 h-20
          m-10 20
          v-60
          l-20 20
          m20 -20
          l20 20" />
    </svg>
  )
}


export default Download;
