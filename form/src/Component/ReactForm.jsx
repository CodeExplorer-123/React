import React from 'react'
import { useState ,useRef } from 'react'

// *********************************************************************************************

//Example : Basic React Form with useState

// const ReactForm = () => {
//     const [name,setName] = useState('');
//     const [email,setEmail] = useState();
//     const [message,setMessage] = useState('');

//     const handleSubmit = (e) => {
//     e.preventDefault();
//     // Do something with form data (like sending it to an API)
//     alert(`Form submitted with: 
//       Name: ${name}
//       Email: ${email}
//       Message: ${message}`);
//   };


//     return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="name">Name:</label>
//         <input
//           type="text"
//           id="name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//       </div>

//       <div>
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//       </div>

//       <div>
//         <label htmlFor="message">Message:</label>
//         <textarea
//           id="message"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           required
//         />
//       </div>

//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default ReactForm;

// Example : Example with an object for form state

// const ReactForm = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,  // Dynamically updates the corresponding field in state
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);  // Logs the full form data object
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <input
//           type="text"
//           name="firstName"  // name attribute maps to formData.firstName
//           value={formData.firstName}
//           onChange={handleChange}
//           placeholder="First Name"
//         />
//       </div>

//       <div>
//         <input
//           type="text"
//           name="lastName"  // name attribute maps to formData.lastName
//           value={formData.lastName}
//           onChange={handleChange}
//           placeholder="Last Name"
//         />
//       </div>

//       <div>
//         <input
//           type="email"
//           name="email"  // name attribute maps to formData.email
//           value={formData.email}
//           onChange={handleChange}
//           placeholder="Email"
//         />
//       </div>

//       <div>
//         <input
//           type="password"
//           name="password"  // name attribute maps to formData.password
//           value={formData.password}
//           onChange={handleChange}
//           placeholder="Password"
//         />
//       </div>

//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default ReactForm;

// Example :  Using useRef

// const ReactForm = () => {
//   // Creating references for the form fields
//   const nameRef = useRef('');
//   const emailRef = useRef('');
//   const messageRef = useRef('');

//   const handleSubmit = (e) => {
//     e.preventDefault();  // Prevent the default form submission

//     // Get the current values from the refs
//     const name = nameRef.current.value;
//     const email = emailRef.current.value;
//     const message = messageRef.current.value;

//     // Do something with the form data (e.g., send it to an API)
//     alert(`Form submitted with: 
//       Name: ${name}
//       Email: ${email}
//       Message: ${message}`);

//     // Optionally clear the fields after submission
//     nameRef.current.value = '';
//     emailRef.current.value = '';
//     messageRef.current.value = '';
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="name">Name:</label>
//         <input
//           type="text"
//           ref={nameRef}  // Attach the ref to this input field
//           required
//         />
//       </div>

//       <div>
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           ref={emailRef}  // Attach the ref to this input field
//           required
//         />
//       </div>

//       <div>
//         <label htmlFor="message">Message:</label>
//         <textarea
//           ref={messageRef}  // Attach the ref to this textarea field
//           required
//         />
//       </div>

//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default ReactForm;




