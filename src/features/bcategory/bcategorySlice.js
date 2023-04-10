import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import bcategoryService from "./bcategoryService";



export const getBcategorys = createAsyncThunk(
  "bcategory/get-bcategorys",
  async (thunkAPI) => {
    try {
      return await bcategoryService.getBcategorys();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
const initialState = {
  bcategorys: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};
export const bcategorySlice = createSlice({
  name: "bcategorys",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBcategorys.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBcategorys.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.bcategorys = action.payload;
      })
      .addCase(getBcategorys.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      });
  },
});
export default bcategorySlice.reducer;