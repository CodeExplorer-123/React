import React from 'react';

class ClassComponentState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  
  increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <>
        <h1>COUNT: {this.state.count}</h1>
        <button onClick={this.increaseCount}>INCREASE COUNT</button>
      </>
    );
  }
}

export default ClassComponentState;
