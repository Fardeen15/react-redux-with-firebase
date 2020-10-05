export function addUserAction(payload) {
  return {
    type: "Add",
    payload,
  };
}
export function DeleteUserAction(payload) {
  return {
    type: "Delete",
    payload,
  };
}
export function EditUserAction(payload) {
  return {
    type: "Edit",
    payload,
  };
}
export function GetUserData(payload) {
  return {
    type: "GetData",
    payload: payload,
  };
}
