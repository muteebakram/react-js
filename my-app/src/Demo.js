import React from "react";

// Example for Pure component.
// Here click one chennai twice will not work whereas in Component it works. Because no change in state.
// Because reconsilation does not happen in PureComponent.
// But in PureComponent change to any variable of state will reload because setState change.
class Demo extends React.Component {
  demoData = "test";
  state = { location: "bangalore", count: 0 };

  // shouldComponentUpdate() {
  //   // returns boolean wheather we need to re-render
  //   return false;
  // }

  shouldComponentUpdate(nextProp, nextState) {
    // youre controlling the wheather comp needs to update.
    console.log("Props:", this.props, nextProp);
    console.log("State:", this.state, nextState);

    return this.state.location !== nextState.location || this.state.count >= 5;
  }

  render() {
    const name = "mike";
    console.log("Demo RENDER CALLED", this.state);
    return (
      <div>
        <h1>Demo component</h1>
        {this.state.count >= 5 ? <p>some sample content</p> : <p></p>}
        <p>
          Hello from {name.toUpperCase()} {this.demoData}
        </p>
        <p>{8 + 7}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          click me 5 times
        </button>
        <button onClick={() => this.setState({ location: "chennai" })}>
          Chennai
        </button>
        <button onClick={() => this.setState({ location: "bangalore" })}>
          Bangalore
        </button>
      </div>
    );
  }
}
export default Demo; // default export
// export { Demo }; // named exports

// class Demo extends React.Component {
//   planet = "Earth";
//   render() {
//     const name = "Muteeb";
//     // Component must always return single with html tag.
//     return (
//       <div>
//         <h1>Hello {name}</h1>
//         <p>From planet {this.planet}.</p>
//       </div>
//     );
//   }
// }

// export default Demo;
