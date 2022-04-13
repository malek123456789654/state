import React from "react";

class Profile extends React.Component {
  constructor() {
    console.log("initialisation");
    super();

    this.state = {
      Fullname: "",
      bio: "",
      profession: "",
    };
  }
  render() {
    return (
      <div>
        <span>{this.state.Fullname}</span>
        <br />
        <span>{this.state.bio}</span>
        <br />
        <span>{this.state.profession}</span>
      </div>
    );
  }
}
export default Profile;
