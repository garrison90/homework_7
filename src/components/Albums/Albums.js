import React, { useEffect } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import AlbumsPhotos from "./AlbumsPhotos";
import AlbumsList from "./AlbumsList";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import { getAlbums } from "../../store/actions/albums";
import { getUsers } from "../../store/actions/users";

function Albums({ users, albums, getAlbums, getUsers }) {
  useEffect(() => {
    getUsers();
  }, [getUsers]);

  useEffect(() => {
    getAlbums();
  }, [getAlbums]);

  const { path } = useRouteMatch();

  return (
    <Paper>
      {users.length === 0 && albums.length === 0 ? (
        <CircularProgress />
      ) : (
        <Switch>
          <Route
            path={`${path}`}
            exact
            render={() => {
              return <AlbumsList users={users} albums={albums} />;
            }}
          />
          <Route
            path={`${path}/:id`}
            render={(route) => {
              return <AlbumsPhotos albumId={route.match.params.id} />;
            }}
          />
        </Switch>
      )}
    </Paper>
  );
}

const mapStateToProps = (state) => {
  return {
    albums: state.albums.albums,
    users: state.users.users,
  };
};

const mapDispatchToProps = {
  getAlbums,
  getUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Albums);
