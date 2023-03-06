import React, { useState } from 'react'



function Component5() {
 
  const [user, setUser]= useState("jesse Hall");
  return (
    <div>
      <h1>Component 5</h1>
  <h2>{`Hello ${user} again!`}</h2>
    </div>
  )
}
export default  Component5;