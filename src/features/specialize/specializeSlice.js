import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import specializeService from "./specializeService";


//Get All Specialize
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


//Create Specialize
export const createSpecialize = createAsyncThunk(
    "specialize/create-specialize",
    async (specializeData, thunkAPI) => {
        try {
            return await specializeService.createSpecialize(specializeData);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

//Get A Specialize
export const getASpecialize = createAsyncThunk(
    "specialize/get-specialize",
    async (id, thunkAPI) => {
        try {
            return await specializeService.getSpecialize(id);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

//Update A Specialize
export const updateASpecialize = createAsyncThunk(
    "specialize/update-specialize",
    async (specialize, thunkAPI) => {
        try {
            return await specializeService.updateSpecialize(specialize);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

//Delete A Specialize
export const deleteASpecialize = createAsyncThunk(
    "specialize/delete-specialize",
    async (id, thunkAPI) => {
        try {
            return await specializeService.deleteSpecialize(id);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const resetState = createAction("Reset_all");

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
            })
            .addCase(createSpecialize.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createSpecialize.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.createdSpecialize = action.payload;
            })
            .addCase(createSpecialize.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(getASpecialize.pending, (state) => {
                state.isLoading = true;
              })
              .addCase(getASpecialize.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.specialName = action.payload.title;
              })
              .addCase(getASpecialize.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
              })
              .addCase(updateASpecialize.pending, (state) => {
                state.isLoading = true;
              })
              .addCase(updateASpecialize.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.updatedSpecialize = action.payload;
              })
              .addCase(updateASpecialize.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
              })
              .addCase(deleteASpecialize.pending, (state) => {
                state.isLoading = true;
              })
              .addCase(deleteASpecialize.fulfilled, (state, action) => {
                state.deletding = false;
                state.isError = false;
                state.isSuccess = true;
                state.deletedSpecialize = action.payload;
              })
              .addCase(deleteASpecialize.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
              })
            .addCase(resetState, () => initialState);
    },
});
export default specializeSlice.reducer;