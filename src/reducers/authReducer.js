import types from '../types/types';

//  STATE vacio cuando no este autentificado, si no va a ser un objeto
// const initialState = {
//   uid: 123123213,
//   name: 'Ivan',
// };

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        uid: action.payload.uid,
        name: action.payload.displayName,
      };
    case types.logout:
      return {};
    default:
      return state;
  }
};
export default authReducer;
