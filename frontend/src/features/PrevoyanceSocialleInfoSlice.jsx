import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../api/axios";

export const addInfoprev = createAsyncThunk('/addInfoprev', async (data, { rejectWithValue }) => {
    try {
      const response = await axiosClient.post('http://localhost:8000/api/info-prevoyance-sociale', data,{
        headers:{
            'Content-Type':'multipart/form-data'
        }
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  });

const prevoyanceSocialleInfoSlice = createSlice({
    name: 'info',
    initialState: {
        info: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addInfoprev.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addInfoprev.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.info = action.payload;
            })
            .addCase(addInfoprev.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default prevoyanceSocialleInfoSlice.reducer;
