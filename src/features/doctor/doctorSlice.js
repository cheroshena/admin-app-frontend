import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
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

export const resetState = createAction("Reset_all");

export const createDoctors = createAsyncThunk(
    "doctor/create-doctors",
    async (doctorData, thunkAPI) => {
        try {
            return await doctorService.createDoctor(doctorData);
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
            })
            .addCase(createDoctors.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createDoctors.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.createdDoctor = action.payload;
            })
            .addCase(createDoctors.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(resetState, () => initialState);
    },
});
export default doctorSlice.reducer;