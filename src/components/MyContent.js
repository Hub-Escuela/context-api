import React from "react";
import UserContext from "../context/UserContext";

class MyContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ipAddress: "..." };
  }

  async componentDidMount() {
    const user = this.context;
    console.log(user);
    if (user.name === "Random") {
      const response = await fetch("https://api.ipify.org?format=json");
      const data = await response.json();
      this.setState({ ipAddress: data.ip });
    } else {
      this.setState({ ipAddress: "USUARIO NO VALIDO" });
    }
  }

  render() {
    return (
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          La ip desde la que se realiza la conexión es {this.state.ipAddress}
        </p>
        <button onClick={() => this.context.handleClick("Marina")}>
          Botón
        </button>
      </div>
    );
  }
}

MyContent.contextType = UserContext;

export default MyContent;
