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
export const getOrderByUser = createAsyncThunk(
    "order/get-order",
    async (id, thunkAPI) => {
        try {
            return await authService.getOrder(id);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

//get channel by user
export const getChannelByUser = createAsyncThunk(
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
            .addCase(getOrderByUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getOrderByUser.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.isSuccess = true;
                state.orderbyuser = action.payload;
                state.message = "success";
            })
            .addCase(getOrderByUser.rejected, (state, action) => {
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                state.isLoading = false;
            })
            .addCase(getChannelByUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getChannelByUser.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.isSuccess = true;
                state.orderbyuser = action.payload;
                state.message = "success";
            })
            .addCase(getChannelByUser.rejected, (state, action) => {
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
            });
    },
});

export default authSlice.reducer;
