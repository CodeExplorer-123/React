import React from "react";

// ******************************************************************************************************

// Topic : Mounting

//Example 

// class Mounting extends React.Component{
//     constructor(props){
//         super(props);
//         console.log("constructor --> 1");
//     }
//     componentDidMount(){
//         console.log("componentDidMount --> 3");
//     }
//     render(){
//         return<>
//         {console.log("render --> 2")}
//         <h1>Hello Mounting</h1>
//         </>
//     }
// }

// export default Mounting;

// *********************************************************************************************************

// Topic : Updating

// class Updating extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     };
//     console.log("constructor --> 1");
//   }

//   changeCount = () => {
//     this.setState({ count: this.state.count + 1 });
//   }

//   componentDidMount() {
//     console.log("componentDidMount --> 3");
//   }

//   componentDidUpdate(){
//     console.log("componentDidUpdate --> 4")
//   }

//   render() {
//     console.log("render --> 2");
//     return (
//       <>
//         <h1>Hello Mounting</h1>
//         <h2>{this.state.count}</h2>
//         <button onClick={this.changeCount}>COUNT</button>
//       </>
//     );
//   }
// }

// export default Updating;


// *********************************************************************************************************

// Topic : Unmounting

class Unmounting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    console.log("constructor --> 1");
  }

  changeCount = () => {
    this.setState({ count: this.state.count + 1 });
  }

  componentDidMount() {
    console.log("componentDidMount --> 3");
  }

  componentDidUpdate(){
    console.log("componentDidUpdate --> 4")
  }

  componentWillUnmount(){
    console.log("Component will unmount --> 5");
  }
  
  render() {
    console.log("render --> 2");
    return (
      <>
        <h1>Hello Mounting</h1>
        <h2>{this.state.count}</h2>
        <button onClick={this.changeCount}>COUNT</button>
      </>
    );
  }
}

export default Unmounting



