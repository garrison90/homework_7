import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { useHistory, useRouteMatch } from "react-router-dom";

function UserListItem({ user }) {
  const history = useHistory();
  const { url } = useRouteMatch();

  return (
    <TableRow
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

export default UserListItem;
