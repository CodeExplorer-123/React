import React, { useState } from 'react'

const FunctionalComponentState = () => {
  const[count,setCount] = useState(0);
  const increaseCount = () => {
    setCount(count=>count+1);
  }
  return (
    <>
    <h1>COUNT : {count}</h1>
    <button onClick={increaseCount}>INCREASE COUNT</button>
    </>
  )
}

export default FunctionalComponentState