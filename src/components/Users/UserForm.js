import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { deleteUser, onSave } from "../../store/actions/users";

function UserForm({ newUser, deleteUser, onSave }) {
  const [user, setUser] = useState(newUser);

  const classes = useStyles();
  const history = useHistory();

  function onInputChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  function onSubmitForm(e) {
    e.preventDefault();
    onSave(user);
    history.push(`/users`);
  }

  function closeForm() {
    history.push(`/users`);
  }

  function deleteUserForm(id) {
    deleteUser(id);
    history.push(`/users`);
  }

  return (
    <Paper>
      <form className={classes.root}>
        <TextField
          type="text"
          name="name"
          className={classes.textField}
          label="Name"
          style={{ margin: 8 }}
          placeholder="Enter name..."
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value={user.name}
          onChange={onInputChange}
        />
        <TextField
          type="text"
          name="username"
          className={classes.textField}
          label="Username"
          style={{ margin: 8 }}
          placeholder="Enter username..."
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value={user.username}
          onChange={onInputChange}
        />
        <TextField
          type="text"
          name="phone"
          className={classes.textField}
          label="Phone"
          style={{ margin: 8 }}
          placeholder="Enter phone..."
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value={user.phone}
          onChange={onInputChange}
        />
        <TextField
          type="text"
          name="email"
          className={classes.textField}
          label="Email"
          style={{ margin: 8 }}
          placeholder="Enter email..."
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value={user.email}
          onChange={onInputChange}
        />
        <div className={classes.buttons}>
          <Button variant="contained" color="primary" onClick={onSubmitForm}>
            Save
          </Button>
          {newUser.id ? (
            <Button
              variant="contained"
              color="secondary"
              onClick={() => deleteUserForm(user.id)}
            >
              Delete
            </Button>
          ) : null}
          <Button variant="contained" color="secondary" onClick={closeForm}>
            Cancel
          </Button>
        </div>
      </form>
    </Paper>
  );
}

const mapStateToProps = (state, { id }) => {
  return {
    newUser:
      id !== "new"
        ? state.users.users.find((item) => +item.id === +id)
        : setEmptyUser(),
  };
};

function setEmptyUser() {
  return { name: "", username: "", phone: "", email: "" };
}

const mapDispatchToProps = {
  deleteUser,
  onSave,
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  textField: {
    width: "98%",
    margin: "20px",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    margin: theme.spacing(1),
  },
}));

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
