import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../api/axios";

// export const fetchFormations = createAsyncThunk('/formations/fetchFormations',
//   async () => {
//     try {
//       const response = await axiosClient.get('http://localhost:8000/api/formations');
//       return response.data;
//     } catch (err) {
//       console.log(err);
//     }
//   }
// );

export const fetchFormationCountByMonth = createAsyncThunk(
  '/formations/fetchFormationCountByMonth',
  async () => {
    try {
      const response = await axiosClient.get('http://localhost:8000/api/formations/count-by-month');
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

// Add other actions and reducers if needed

const initialState = {
  formations: [],
  formationCountByMonth: [],
  loading: false,
  error: null,
};

const formationSlice = createSlice({
  name: "formation",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    //   .addCase(fetchFormations.pending, (state) => {
    //     state.loading = true;
    //   })
    //   .addCase(fetchFormations.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.formations = action.payload;
    //   })
    //   .addCase(fetchFormations.rejected, (state, action) => {
    //     state.loading = false;
    //     state.error = action.error.message;
    //   })
      .addCase(fetchFormationCountByMonth.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFormationCountByMonth.fulfilled, (state, action) => {
        state.loading = false;
        state.formationCountByMonth = action.payload;
      })
      .addCase(fetchFormationCountByMonth.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default formationSlice.reducer;