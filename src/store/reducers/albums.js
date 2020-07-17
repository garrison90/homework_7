import { SET_ALBUMS, SET_ALBUM_PHOTOS } from "../actions/albums";

const initialState = {
  albums: [],
  albumPhotos: [],
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case SET_ALBUMS:
      return { ...state, albums: payload };
    case SET_ALBUM_PHOTOS:
      return {
        ...state,
        albumPhotos: payload,
      };
    default:
      return state;
  }
}
