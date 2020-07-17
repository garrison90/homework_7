import React from "react";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import AlbumListItem from "./AlbumListItem";
import Paper from "@material-ui/core/Paper";

function AlbumsList({ albums, users }) {
  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Album</TableCell>
            <TableCell align="right">Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {albums.map((album) => (
            <AlbumListItem
              key={album.id}
              album={album}
              user={users.find((user) => {
                return user.id === album.userId;
              })}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default AlbumsList;
