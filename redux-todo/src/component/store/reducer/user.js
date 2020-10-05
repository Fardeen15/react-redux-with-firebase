export function user(state = { user: [] }, action) {
  switch (action.type) {
    case "GetData":
      return { user: action.payload };
    case "Add":
      state.user.push(action.payload);
      return { user: state.user };
    case "Delete":
      state.user.splice(action.payload, 1);
      return { user: state.user };
    case "Edit":
      state.user.splice(action.payload.index, 1, action.payload.value);
      return { user: state.user };
    default:
      return state;
  }
}
