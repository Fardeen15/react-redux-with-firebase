import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Edit } from "../../action/action";
import { EditUserAction } from "../store/Action/userAction";

class EditModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      Age: "",
      pic: "",
    };
  }
  componentWillMount() {
    this.setState({
      fname: this.props.val.fname,
      lname: this.props.val.lname,
      Age: this.props.val.Age,
      pic: this.props.val.picture,
    });
  }
  Fname = (event) => {
    this.setState({
      fname: event.target.value,
    });
  };
  lname = (event) => {
    this.setState({
      lname: event.target.value,
    });
  };
  Age = (event) => {
    console.log(event.target.value);
    this.setState({
      Age: event.target.value,
    });
  };
  pic = (event) => {
    const file = event.target.files;
    const localImageUrl = window.URL.createObjectURL(file[0]);
    // this.props.onFileLoaded(localImageUrl)
    this.setState({
      pic: localImageUrl,
    });
  };

  render() {
    const obj = {
      fname: this.state.fname,
      lname: this.state.lname,
      Age: this.state.Age,
      picture: this.state.pic,
    };
    return (
      <div id="modalDiv">
        <div id="inputDiv">
          <div>
            <i className="fas fa-times-circle" onClick={this.props.updt}></i>
          </div>
          <h1>Edit Form</h1>
          <br />
          <input
            onChange={this.Fname}
            value={this.state.fname}
            type="text"
            placeholder="First Name"
            id="Fname"
          />
          <br />
          <br />
          <input
            onChange={this.lname}
            value={this.state.lname}
            type="text"
            placeholder="Last Name"
            id="Lname"
          />
          <br />
          <br />
          <input
            onChange={this.Age}
            value={this.state.Age}
            type="text"
            placeholder="Age"
            id="age"
          />
          <br />
          <br />
          <input
            onChange={this.pic}
            type="file"
            placeholder="Picture"
            id="age"
          />
          <br />
          <br />
          <div id="imgDiv">
            <img src={this.state.pic} />
          </div>
          <span id="btn">
            <button
              onClick={() => {
                this.props.Edit({ value: obj, index: this.props.index });
                this.props.updt();
              }}
            >
              update
            </button>
          </span>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state /*, ownProps*/) => {
  return {
    user: state.user,
  };
};
const mapDispatchToProps = { Edit: EditUserAction };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(EditModal));
