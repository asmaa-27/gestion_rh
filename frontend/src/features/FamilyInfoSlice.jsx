import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../api/axios";

export const addInfofamily = createAsyncThunk('/addInfofamily',async (data, { rejectWithValue }) => {
    try {
      const response = await axiosClient.post('http://localhost:8000/api/info-familiale', data,{
        headers:{
            'Content-Type':'multipart/form-data'
        }
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  });
const familyInfoSlice = createSlice({
    name: 'info',
    initialState: {
        info: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addInfofamily.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addInfofamily.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.info = action.payload;
            })
            .addCase(addInfofamily.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default familyInfoSlice.reducer;
