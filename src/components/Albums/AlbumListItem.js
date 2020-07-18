import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { useHistory, useRouteMatch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

function AlbumListItem({ album, user }) {
  const history = useHistory();
  const { url } = useRouteMatch();
  const classes = useStyles();

  return (
    <TableRow>
      <TableCell
        className={classes.root}
        onClick={() => {
          history.push(`${url}/${album.id}`);
        }}
        scope="row"
      >
        {album.title}
      </TableCell>
      <TableCell align="right">{user.name}</TableCell>
    </TableRow>
  );
}

const useStyles = makeStyles(() => ({
  root: {
    textDecoration: "none",
    cursor: "pointer",
  },
}));

export default AlbumListItem;
