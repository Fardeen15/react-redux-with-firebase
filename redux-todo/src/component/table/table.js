import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import EditModal from "../edit/editMOdal";
import ImgModal from "../imageModal/modal";
import { Delete } from "../../action/action";
import { DeleteUserAction } from "../store/Action/userAction";
import { GetData, DeleteUserData } from "../store/Middileware/userMiddileWare";

class Datatable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      student: [],
      edit: false,
      val: "",
      index: "",
      imagesrc: "",
      image: false,
    };
  }
  data = () => {
    console.log(this.props);
    this.setState(
      {
        student: [],
      },
      () => {
        this.setState({
          student: this.props.user,
        });
      }
    );
  };
  edit = (value, index) => {
    this.setState({
      edit: true,
      val: value,
      index,
    });
  };
  del = (index) => {
    // var student = this.state.student;
    // student.splice(index, 1);
    // this.setState({
    //   student,
    // });
    this.props.Delete(index);
  };
  editFalse = () => {
    this.setState({
      edit: false,
      val: "vlue",
      index: "",
    });
  };
  componentWillMount() {
    this.props.GetUserData();
    this.data();
  }
  CreateNewImage = (img1, i) => {
    var img = new Image();
    img.src = img1;

    var container = document.getElementById("container" + i);
    container.appendChild(img);
  };
  mdl = (src) => {
    this.setState({
      imagesrc: src,
      image: true,
    });
  };
  close = () => {
    this.setState({
      image: false,
    });
  };
  render() {
    console.log(this.props);
    return (
      <div id="mainContainer">
        <div id="tableDiv">
          {this.state.edit ? (
            <EditModal
              updt={this.editFalse}
              index={this.state.index}
              val={this.state.val}
            />
          ) : null}
          {this.state.image ? (
            <ImgModal close={this.close} src={this.state.imagesrc} />
          ) : null}
          <table id="data">
            <thead>
              <tr>
                <th>image</th>
                <th>S no</th>
                <th>Name</th>
                <th>Last Name</th>
                <th>Age</th>
                <th>
                  <button
                    onClick={() => {
                      this.props.history.push("/");
                    }}
                  >
                    Add Data
                  </button>
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.props.user.map((value, index) => {
                return (
                  <tr key={index}>
                    <td id={"container" + index}>
                      <img
                        onClick={() => this.mdl(value.picture)}
                        id="img"
                        src={value.picture}
                      />
                    </td>
                    <td>{index + 1}</td>
                    <td>{value.fname}</td>
                    <td>{value.lname}</td>
                    <td>{value.Age}</td>
                    <td>
                      <button
                        name={index}
                        onClick={(ev) => {
                          this.del(value);
                        }}
                      >
                        delete
                      </button>
                    </td>
                    <td>
                      <button onClick={() => this.edit(value, index)}>
                        Edit
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
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
const mapDispatchToProps = { Delete: DeleteUserData, GetUserData: GetData };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Datatable));
