import React from "react";

class CheckOut extends React.Component {
  email = null;
  state = { name: "", email: "" };

  saveData(e) {
    e.preventDefault();
    console.log("Name:", this.state.name);
    console.log("Email:", this.email.value);
  }

  render() {
    return (
      <form onSubmit={(e) => this.saveData(e)}>
        <label>Name: </label>
        {/* Controlled comp because youre using state to get/change data ie still change VDOM */}
        <input
          type="text"
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        {this.state.name === "" ? <small>Enter valid name</small> : null}

        <br></br>
        <label>Email: </label>
        {/* UnControlled comp because youre changing the actual DOM with ref.
            'ref' is used to access specific thing in DOM from VDOM.

            Practical usage is to get the files details from upload.
            event.target.files or document.getElementById().files
         */}
        <input
          type="text"
          ref={(r) => (this.email = r)}
          onChange={(e) => this.setState({ email: e.target.value })}
        />
        {this.email && this.email.value === "" ? (
          <small>Enter valid Email</small>
        ) : null}

        <br></br>
        <br></br>
        <button>Submit</button>
      </form>
    );
  }
}

export default CheckOut;
