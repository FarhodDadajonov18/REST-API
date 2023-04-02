import { createSlice } from "@reduxjs/toolkit";
import {
  getProducts,
  postProduct,
  getProduct,
  deleteProduct,
  updateProduct,
} from "./productsAsyncThunk";

const initialState = {
  news: [],
  newsLoadingStatus: true,

  postSuccess: "",
  postProductLoading: true,

  getProductLoading: true,
  product: {},

  deleteSuccess: "",
  deleteLoading: true,

  updateLoading: true,
  updateSuccess: "",

  error: "",
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build
      .addCase(getProducts.pending, (state, action) => {
        state.postSuccess = "";
        state.deleteSuccess = null;
        state.newsLoadingStatus = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.news = action.payload;
        state.newsLoadingStatus = false;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.newsLoadingStatus = false;
        state.error = action.error.message;
      });

    // postProduct
    build
      .addCase(postProduct.pending, (state, action) => {
        state.postProductLoading = true;
      })
      .addCase(postProduct.fulfilled, (state, action) => {
        state.postSuccess = "success";
        state.postProductLoading = false;
      })
      .addCase(postProduct.rejected, (state, action) => {
        state.postProductLoading = false;
        state.error = action.error.message;
      });

    // get every product

    build
      .addCase(getProduct.pending, (state, action) => {
        state.updateSuccess = null;
        state.getProductLoading = true;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.product = action.payload;
        state.getProductLoading = false;
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.getProductLoading = false;
        state.error = action.error.message;
      });

    // delete Product
    build
      .addCase(deleteProduct.pending, (state, action) => {
        state.deleteLoading = true;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.deleteSuccess = "success";
        state.deleteLoading = false;
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.deleteLoading = false;
        state.error = action.error.message;
      });

    // updateProduct
    build
      .addCase(updateProduct.pending, (state) => {
        state.updateLoading = true;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.updateSuccess = "success";
        state.updateLoading = false;
        console.log(action.payload);
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.updateLoading = false;
        state.error = action.error.message;
      });
  },
});

export default newsSlice.reducer;
