import React, { useState } from 'react'
import { useRef } from 'react';

// ************************************************************************************

// Topic : onClick

// Example

// const Event = () => {
//     const shoot = () =>{
//         alert("Hello Mr Akash Singh ");
//     }
//   return (
//     <>
//     <h1>Click on button to get alert</h1>
//     <button onClick={shoot}>Click</button>
//     </>
//   )
// }

//export default Event

// Example : Passing Arguments

// const Event = () => {
//     const shoot = (name) =>{
//         alert(`Hello &{name}`);
//     }
//   return (
//     <>
//     <h1>Click on button to get alert</h1>
//     <button onClick={shoot("Mr Akash SIngh")}>Click</button>
//     </>
//   )
// }

//export default Event

// Example : React Event Object

// const Event = () => {
//     const shoot = (name,b) =>{
//         alert(`Hello ${name} and ${b.type}`);
//     }
//   return (
//     <>
//     <h1>Click on button to get alert</h1>
//     <button onClick={(event)=>shoot("Mr Akash SIngh",event)}>Click</button>
//     </>
//   )
// }

// export default Event

// ***********************************************************************************************

// Topic : onChange 

// Example 

// const Event = () => {
//     const[value,setValue] = useState('');
//     const handler = (event)=>{
//         setValue(event.target.value);
//     }
//   return (
//   <>
//     <div>Event</div>
//     <input type='text' value={value} onChange={handler}></input>
//     <p>I Typed : {value}</p>
//   </>
//   )
// }

// export default Event

// Example : useRef

// const Event = () => {
//     const value = useRef();
//     const handler = ()=>{
//         alert(value.current.value);
//     }
//   return (
//   <>
//     <div>Event</div>
//     <input type='text' ref={value}></input>
//     <button onClick={handler}>click here</button>
//   </>
//   )
// }

// export default Event

// ***********************************************************************************************

// const Event = () => {
//     const num1 = useRef();
//     const num2 = useRef();
//     const [sum,setSum] = useState(null);
//     const calculation = () =>{
//         event.preventDefault();
//         const s = parseFloat(num1.current.value) + parseFloat(num2.current.value);
//         setSum(s);
//         num1.current.value="";
//         num2.current.value="";
//     }
//   return (
//     <form onSubmit={calculation}>
        
//         <input type="number" ref={num1} placeholder="Enter Num1"></input><br />
//         <input type="number" ref={num2} placeholder="Enter Num2"></input><br />
//         <button onClick={calculation}>click</button>
//         <h4>SUM : {sum}</h4>

//     </form>
//   )
// }

// export default Event