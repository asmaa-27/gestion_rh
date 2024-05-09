import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../api/axios";

export const Addocument = createAsyncThunk('/adddocument',async (data, { rejectWithValue }) => {
    try {
      const response = await axiosClient.post('http://localhost:8000/api/document', data,{
        headers:{
            'Content-Type':'multipart/form-data'
        }
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  });
  const documentSlice = createSlice({
    name: 'document',
    initialState: {
        document: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(Addocument.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(Addocument.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.document = action.payload;
            })
            .addCase(Addocument.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

<<<<<<< HEAD
export default documentSlice.reducer;
=======
export default documentSlice.reducer;
>>>>>>> 32316ed34c7abf92b99f47f49e523e359b12d1cb
