import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  GET_PRODUCTS,
  POST_PRODUCT,
  GET_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
} from "../../services/Api/utils";

export const getProducts = createAsyncThunk("get/Products", async () => {
  return await axios.get(GET_PRODUCTS).then((res) => res.data);
});

export const postProduct = createAsyncThunk("post/Product", async (payload) => {
  return await axios({
    method: "POST",
    url: POST_PRODUCT,
    data: payload,
    headers: { "content-type": "multipart/form-data" },
  }).then((res) => res.data);
});

export const getProduct = createAsyncThunk("get/Product", async (payload) => {
  return await axios({
    method: "GET",
    url: GET_PRODUCT + payload + "/",
  }).then((res) => res.data);
});

export const deleteProduct = createAsyncThunk(
  "delete/Product",
  async (payload) => {
    return await axios({
      method: "DELETE",
      url: DELETE_PRODUCT + payload + "/",
    }).then((res) => res.data);
  }
);

export const updateProduct = createAsyncThunk(
  "update/Product",
  async (payload) => {
    return await axios({
      method: "PATCH",
      data: payload.data,
      url: UPDATE_PRODUCT + payload.id + "/",
      headers: { "content-type": "multipart/form-data" },
    }).then((res) => res.data);
  }
);
