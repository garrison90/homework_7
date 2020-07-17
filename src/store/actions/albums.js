import api from "../../api";

export const SET_ALBUMS = "SET_ALBUMS";
export const getAlbums = () => (dispatch) => {
  api.get(`albums`).then((resp) =>
    dispatch({
      type: SET_ALBUMS,
      payload: resp.data,
    })
  );
};

export const SET_ALBUM_PHOTOS = "SET_ALBUM_PHOTOS";
export const getAlbumPhotos = (albumId) => (dispatch) => {
  api.get(`photos?albumId=${albumId}`).then((resp) =>
    dispatch({
      type: SET_ALBUM_PHOTOS,
      payload: resp.data,
    })
  );
};
