import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './authService';

//Token store in local storage
const getUserfromLocalStorage = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

const initialState = {
    user: getUserfromLocalStorage,
    orders: [],
    channels: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
};


//Admin login
export const login = createAsyncThunk(
    'auth/admin-login',
    async (userData, thunkAPI) => {
        try {
            return await authService.login(userData);

        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    });

//graph chart get monthly data
export const getMonthlyData = createAsyncThunk(
    'orders/monthlydata',
    async (thunkAPI) => {
        try {
            return await authService.getMonthlyOrders();

        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    });

//graph chart get monthly data
export const getYearlyData = createAsyncThunk(
    'orders/yearlydata',
    async (thunkAPI) => {
        try {
            return await authService.getYearlyStats();

        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    });

//get all orders
export const getOrders = createAsyncThunk(
    "order/get-orders",
    async (thunkAPI) => {
        try {
            return await authService.getOrders();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

//get order by user
export const getOrder = createAsyncThunk(
    "order/get-order",
    async (id, thunkAPI) => {
        try {
            return await authService.getOrder(id);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

//Update order
export const updateAOrder = createAsyncThunk(
    "order/update-order",
    async (data, thunkAPI) => {
        try {
            return await authService.updateOrder(data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

//update channel
export const updateAChannel = createAsyncThunk(
    "order/update-channel",
    async (data, thunkAPI) => {
        try {
            return await authService.updateChannel(data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

//get channel by user
export const getChannel = createAsyncThunk(
    "channel/get-channel",
    async (id, thunkAPI) => {
        try {
            return await authService.getChannel(id);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

//get al channels
export const getChannels = createAsyncThunk(
    "channel/get-channels",
    async (thunkAPI) => {
        try {
            return await authService.getChannels();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {},
    extraReducers: (buildeer) => {
        buildeer
            .addCase(login.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
                state.message = "success";
            })
            .addCase(login.rejected, (state, action) => {
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                state.isLoading = false;
            })
            .addCase(getOrders.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getOrders.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.isSuccess = true;
                state.orders = action.payload;
                state.message = "success";
            })
            .addCase(getOrders.rejected, (state, action) => {
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                state.isLoading = false;
            })
            .addCase(getChannels.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getChannels.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.isSuccess = true;
                state.channels = action.payload;
                state.message = "success";
            })
            .addCase(getChannels.rejected, (state, action) => {
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                state.isLoading = false;
            })
            .addCase(getOrder.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getOrder.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.isSuccess = true;
                state.singleOrder = action.payload;
                state.message = "success";
            })
            .addCase(getOrder.rejected, (state, action) => {
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                state.isLoading = false;
            })
            .addCase(getChannel.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getChannel.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.isSuccess = true;
                state.singleChannel = action.payload;
                state.message = "success";
            })
            .addCase(getChannel.rejected, (state, action) => {
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                state.isLoading = false;
            })
            .addCase(getMonthlyData.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getMonthlyData.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.isSuccess = true;
                state.monthlyData = action.payload;
                state.message = "success";
            })
            .addCase(getMonthlyData.rejected, (state, action) => {
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                state.isLoading = false;
            })
            .addCase(getYearlyData.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getYearlyData.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.isSuccess = true;
                state.yearlyData = action.payload;
                state.message = "success";
            })
            .addCase(getYearlyData.rejected, (state, action) => {
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                state.isLoading = false;
            })
            .addCase(updateAOrder.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updateAOrder.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.isSuccess = true;
                state.yearlyData = action.payload;
                state.message = "success";
            })
            .addCase(updateAOrder.rejected, (state, action) => {
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                state.isLoading = false;
            })
            .addCase(updateAChannel.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updateAChannel.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.isSuccess = true;
                state.yearlyData = action.payload;
                state.message = "success";
            })
            .addCase(updateAChannel.rejected, (state, action) => {
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                state.isLoading = false;
            });
    },
});

export default authSlice.reducer;
