import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { useHistory, useRouteMatch } from "react-router-dom";

function AlbumListItem({ album, user }) {
  const history = useHistory();
  const { url } = useRouteMatch();

  return (
    <TableRow
      onClick={() => {
        history.push(`${url}/${album.id}`);
      }}
    >
      <TableCell component="th" scope="row">
        {album.title}
      </TableCell>
      <TableCell align="right">{user.name}</TableCell>
    </TableRow>
  );
}

export default AlbumListItem;
