import React, { useEffect } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import UsersList from "./UsersList";
import UserForm from "./UserForm";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";
import { getUsers } from "../../store/actions/users";
import CircularProgress from "@material-ui/core/CircularProgress";

function Users({ getUsers, users }) {
  useEffect(() => {
    getUsers();
  }, [getUsers]);
  const { path } = useRouteMatch();

  return (
    <Paper>
      {users.length === 0 ? (
        <CircularProgress />
      ) : (
        <Switch>
          <Route
            path={`${path}`}
            exact
            render={() => {
              return <UsersList users={users} />;
            }}
          />
          <Route
            path={`${path}/:id`}
            render={(route) => {
              return <UserForm id={route.match.params.id} />;
            }}
          />
        </Switch>
      )}
    </Paper>
  );
}

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
  };
};

const mapDispatchToProps = {
  getUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
