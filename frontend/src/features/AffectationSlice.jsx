import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../api/axios";

export const addaffectation = createAsyncThunk('/addaffectation',async (data, { rejectWithValue }) => {
    try {
      const response = await axiosClient.post('http://localhost:8000/api/affectation', data,{
        headers:{
            'Content-Type':'multipart/form-data'
        }
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  });

const affectationSlice = createSlice({
    name: 'info',
    initialState: {
        info: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addaffectation.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addaffectation.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.info = action.payload;
            })
            .addCase(addaffectation.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default affectationSlice.reducer;
