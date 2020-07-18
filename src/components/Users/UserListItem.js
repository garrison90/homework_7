import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { useHistory, useRouteMatch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

function UserListItem({ user }) {
  const history = useHistory();
  const { url } = useRouteMatch();
  const classes = useStyles();

  return (
    <TableRow
      className={classes.root}
      onClick={() => {
        history.push(`${url}/${user.id}`);
      }}
    >
      <TableCell component="th" scope="row">
        {user.name}
      </TableCell>
      <TableCell align="right">{user.username}</TableCell>
      <TableCell align="right">{user.phone}</TableCell>
      <TableCell align="right">{user.email}</TableCell>
    </TableRow>
  );
}

const useStyles = makeStyles(() => ({
  root: {
    textDecoration: "none",
    cursor: "pointer",
  },
}));

export default UserListItem;
