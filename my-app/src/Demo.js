import React from "react";

class Demo extends React.Component {
  planet = "Earth";
  render() {
    const name = "Muteeb";
    return (
      <div>
        <h1>Hello {name}</h1>
        <p>From planet {this.planet}.</p>
      </div>
    );
  }
}

export default Demo;
