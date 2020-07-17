import React, { useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import { connect } from "react-redux";
import { getAlbumPhotos } from "../../store/actions/albums";
import { useParams } from "react-router-dom";

function AlbumsPhotos({ photos, getAlbumPhotos }) {
  const { id } = useParams();

  useEffect(() => {
    getAlbumPhotos(id);
  }, [getAlbumPhotos, id]);

  return (
    <Paper>
      <GridList cellHeight={160} cols={3}>
        {photos.map((photo) => (
          <GridListTile key={photo.id}>
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <GridListTileBar title={photo.title}></GridListTileBar>
          </GridListTile>
        ))}
      </GridList>
    </Paper>
  );
}

const mapStateToProps = (state) => {
  return {
    photos: state.albums.albumPhotos,
  };
};

const mapDispatchToProps = {
  getAlbumPhotos,
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumsPhotos);
