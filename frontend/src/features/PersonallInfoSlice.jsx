import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addInfoPersonnel = createAsyncThunk('/addInfoPersonnel', async () => {
    const response = await axios.post('http://localhost:3000/api/fonctionnaire');
    return response.data;
});

const personalInfoSlice = createSlice({
    name: 'info',
    initialState: {
        info: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addInfoPersonnel.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addInfoPersonnel.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.info = action.payload;
            })
            .addCase(addInfoPersonnel.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default personalInfoSlice.reducer;
