import React from "react";

class AboutUs extends React.Component {
  constructor() {
    super(); // Initializing parent class's constructor
    console.log("Contructor");
    this.state = {
      viewType: "LIST",
      name: "",
      age: 0,
    };
  }

  componentDidMount() {
    console.log("Component did mount");
    // Async logics/ calls (API Calls)
  }

  componentDidUpdate() {
    console.log("Component did update");
    // Comparision of props and state
  }

  componentWillUnmount() {
    console.log("Component will unmount");
    // Cleanup logic
  }

  // shouldComponentUpdate() {
  //   console.log("Should component update")
  //   // Decide whether to re render the component or not
  //   return false;
  // }

  render() {
    // console.log("Render");
    // console.log(this.props);
    return (
      <div>
        <h2>About Us Screen - Class based component</h2>
        View Type {this.state.viewType}
        <button
          onClick={() => {
            this.setState({ viewType: "TILE" });
          }}
        >
          Click here
        </button>
      </div>
    );
  }
}

export default AboutUs;
