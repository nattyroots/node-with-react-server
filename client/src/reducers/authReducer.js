export default function(state = {}, action) {
  console.log("authReducer -> action : " + action.type);
  switch (action.type) {
    default:
      return state;
  }
}
