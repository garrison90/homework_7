import {
  SET_USERS,
  ADD_USER,
  UPDATE_USER,
  DELETE_USER,
} from "../actions/users";

const initialState = {
  users: [],
  newUser: {},
};

function createUser(users, formUser) {
  return [...users, formUser];
}

function updateUser(users, formUser) {
  return users.map((user) => (user.id === formUser.id ? formUser : user));
}

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case SET_USERS:
      return { ...state, users: payload };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((item) => item.id !== payload),
      };
    case ADD_USER:
      return {
        ...state,
        users: createUser(...state.users, payload),
      };
    case UPDATE_USER:
      return {
        ...state,
        users: updateUser(...state.users, payload),
      };
    default:
      return state;
  }
}
