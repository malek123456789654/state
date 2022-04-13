import React from "react";
import "./App.css";
import Profile from "./Component/Profile";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isShow: true,
    };
  }
  toogleVisibility = () => this.setState({ isShow: !this.state.isShow });
  render() {
    console.log("rendering");
    return (
      <div className="App">
        <h1>Profile</h1>
        {this.state.isShow && <Profile />}
        <button onClick={this.toogleVisibility}>click</button>
      </div>
    );
  }
}

export default App;
