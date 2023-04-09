import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import doctorService from "./doctorService";


export const getDoctors = createAsyncThunk(
    "doctor/get-doctors",
    async (thunkAPI) => {
        try {
            return await doctorService.getDoctors();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);
const initialState = {
    doctors: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
};
export const doctorSlice = createSlice({
    name: "doctors",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getDoctors.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getDoctors.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.doctors = action.payload;
            })
            .addCase(getDoctors.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            });
    },
});
export default doctorSlice.reducer;