import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { add } from "../store/Middileware/userMiddileWare";

class From extends React.Component {
  constructor() {
    super();
    this.state = {
      Fname: "",
      lname: "",
      Age: "",
      pic: "",
    };
  }
  Fname = (event) => {
    this.setState({
      Fname: event.target.value,
    });
  };
  lname = (event) => {
    this.setState({
      lname: event.target.value,
    });
  };
  Age = (event) => {
    this.setState({
      Age: event.target.value,
    });
  };
  pic = (event) => {
    const file = event.target.files;
    const localImageUrl = window.URL.createObjectURL(file[0]);
    console.log(localImageUrl);
    // this.props.onFileLoaded(localImageUrl)
    this.setState({
      pic: localImageUrl,
    });
  };
  clear = () => {
    document.getElementById("picture").value = "";
    // window.URL.revokeObjectURL(this.state.pic)
    this.setState({
      lname: "",
      Fname: "",
      Age: "",
      pic: "",
    });
  };
  render() {
    const obj = {
      fname: this.state.Fname,
      lname: this.state.lname,
      Age: this.state.Age,
      // picture: this.state.pic
    };
    console.log(this.props);
    return (
      <div id="dataDiv">
        <h1>Redux ToDo</h1> <br />
        {/* <div id="inputDiv"> */}
        <input
          onChange={this.Fname}
          value={this.state.Fname}
          type="text"
          placeholder="First Name"
          id="Fname"
        />
        <br />
        <br />
        <input
          onChange={this.lname}
          type="text"
          value={this.state.lname}
          placeholder="Last Name"
          id="Lname"
        />
        <br />
        <br />
        <input
          onChange={this.Age}
          type="text"
          value={this.state.Age}
          placeholder="Age"
          id="age"
        />
        <br />
        <br />
        <input
          onChange={this.pic}
          type="file"
          placeholder="Picture"
          id="picture"
        />
        <br />
        <br />
        <div id="imgDiv">
          <img src={this.state.pic} />
        </div>
        <button
          onClick={() => {
            this.props.add(obj);
            this.clear();
          }}
        >
          add
        </button>
        <button
          onClick={() => {
            this.props.history.push("/table");
          }}
        >
          View List
        </button>
        {/* </div > */}
      </div>
    );
  }
}
const mapStateToProps = (state /*, ownProps*/) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = { add };

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(From));
// export default ;
