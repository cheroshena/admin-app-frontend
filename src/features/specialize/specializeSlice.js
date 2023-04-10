import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import specializeService from "./specializeService";



export const getSpecializes = createAsyncThunk(
    "specialize/get-specializes",
    async (thunkAPI) => {
        try {
            return await specializeService.getSpecializes();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);
const initialState = {
    specializes: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
};
export const specializeSlice = createSlice({
    name: "specializes",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getSpecializes.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getSpecializes.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.specializes = action.payload;
            })
            .addCase(getSpecializes.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            });
    },
});
export default specializeSlice.reducer;