import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addInfoprev = createAsyncThunk('/addInfoprev', async () => {
    const response = await axios.post('http://localhost:3000/api/info-prevoyance-sociale');
    return response.data;
});

const prevoyenceSocialleSlice = createSlice({
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

export default prevoyenceSocialleSlice.reducer;
