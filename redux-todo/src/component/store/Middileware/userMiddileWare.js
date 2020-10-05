import {
  addUserAction,
  DeleteUserAction,
  GetUserData,
} from "../Action/userAction";
import { db } from "../../../firebaseConfige";

export function add(payload) {
  return (dispatch) => {
    db.ref()
      .child("user")
      .child(`${payload.fname}${payload.lname}`)
      .set(payload)
      .then(() => {
        dispatch(() => addUserAction(payload));
      });
  };
}

export function GetData() {
  return (dispatch) => {
    db.ref()
      .child("user")
      .on("value", (snap) => {
        if (snap.val()) {
          dispatch(GetUserData(Object.values(snap.val())));
        }
      });
  };
}
export function DeleteUserData(payload) {
  return (dispatch) => {
    db.ref()
      .child("user")
      .child(`${payload.fname}${payload.lname}`)
      .remove()
      .then(() => {
        alert("Student has been deleted");
        // dispatch(DeleteUserAction(Object.values(snap.val())));
      });
  };
}
