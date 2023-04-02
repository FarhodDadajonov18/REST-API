import { configureStore } from "@reduxjs/toolkit";
import newsSlice from "./productsSlice/productsSlice";

 const store = configureStore({
  reducer: {newsSlice}
})

export default store;