import api from "../../api";

export const SET_USERS = "SET_USERS";
export const getUsers = () => (dispatch) => {
  api.get(`users`).then(({ data }) =>
    dispatch({
      type: SET_USERS,
      payload: data,
    })
  );
};

export const DELETE_USER = "DELETE_USER";
export const deleteUser = (id) => (dispatch) => {
  api.delete(`/users/${id}`).then(() =>
    dispatch({
      type: DELETE_USER,
      payload: id,
    })
  );
};

export const ADD_USER = "ADD_USER";
export const UPDATE_USER = "UPDATE_USER";
export const onSave = (user) => (dispatch) => {
  if (user.id) {
    api.put(`/users/${user.id}`, user).then((resp) =>
      dispatch({
        type: UPDATE_USER,
        payload: resp.data,
      })
    );
  } else {
    api.post(`/users`, user).then((resp) =>
      dispatch({
        type: ADD_USER,
        payload: resp.data,
      })
    );
  }
};
