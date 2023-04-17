import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import doctorService from "./doctorService";

//Get All Doctors
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

//Create A Doctor
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

//Get A Doctor
export const getADoctor = createAsyncThunk(
    "doctor/get-doctor",
    async (id, thunkAPI) => {
        try {
            return await doctorService.getDoctor(id);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

//Update A Doctor
export const updateADoctor = createAsyncThunk(
    "doctor/update-doctor",
    async (doctor, thunkAPI) => {
        try {
            return await doctorService.updateDoctor(doctor);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

//Delete A Doctor
export const deleteADoctor = createAsyncThunk(
    "doctor/delete-doctor",
    async (id, thunkAPI) => {
        try {
            return await doctorService.deleteDoctor(id);
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
            .addCase(getADoctor.pending, (state) => {
                state.isLoading = true;
              })
              .addCase(getADoctor.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.doctorName = action.payload.name;
                state.doctorGender = action.payload.gender;
                state.doctorQualification = action.payload.qulification;
                state.doctorDiscription = action.payload.discription;
                state.doctorRegno = action.payload.regno;
                state.doctorSpecialize = action.payload.specialize;
                state.doctorExpirience = action.payload.expirience;
                state.doctorTimeduration = action.payload.timeduration;
                state.doctorQuantity = action.payload.quantity;
                state.doctorImages = action.payload.images;
              })
              .addCase(getADoctor.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
              })
              .addCase(updateADoctor.pending, (state) => {
                state.isLoading = true;
              })
              .addCase(updateADoctor.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.updatedDoctor = action.payload;
              })
              .addCase(updateADoctor.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
              })
              .addCase(deleteADoctor.pending, (state) => {
                state.isLoading = true;
              })
              .addCase(deleteADoctor.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.deletedDoctor = action.payload;
              })
              .addCase(deleteADoctor.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
              })
            .addCase(resetState, () => initialState);
    },
});
export default doctorSlice.reducer;