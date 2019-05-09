import axios from "axios";
import { GET_BOOKS, ADD_BOOK, DELETE_BOOK, BOOKS_LOADING } from "./types";
import { tokenConfig } from "./authActions";
import { returnErrors } from "./errorActions";

export const getBooks = () => dispatch => {
  dispatch(setBooksLoading());
  axios
    .get("/api/books")
    .then(res =>
      dispatch({
        type: GET_BOOKS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const addBook = book => (dispatch, getState) => {
  axios
    .post("/api/books", book, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: ADD_BOOK,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const deleteBook = id => (dispatch, getState) => {
  axios
    .delete(`/api/books/${id}`, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: DELETE_BOOK,
        payload: id
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const setBooksLoading = () => {
  return {
    type: BOOKS_LOADING
  };
};
