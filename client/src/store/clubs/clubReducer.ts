import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { getClubs } from '../../services/ClubsServices';
import { IClubs } from '../../types/IClubs';
import { IAxiosError } from '../../types/IError';

/*const fetchClubsT= createAsyncThunk(
    'users/fetchByIdStatus',
    async (userId: number, thunkAPI) => {
      const response = await getClubs()
      return response
    }
  )



interface ClubsState {
    clubs: IClubs;
    error: string;
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialState: ClubsState = {
    clubs: {results:[],
            total:0},
    error: '',
    loading: 'idle'
};

export const clubsSlice = createSlice({
    name: 'clubs',
    initialState,
    reducers: {
        clubsFetched: (state, action: PayloadAction<IClubs>) => {
            state.loading = 'succeeded';
            state.error=''
            state.clubs = action.payload;
        },
        errorFetchingClubs: (state, action: PayloadAction<IAxiosError>) => {
            state.loading = 'failed';
            state.error = action.payload.message
        },
        fetchClubs: (state) => {
            state.loading = 'pending';
        },
        
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchClubsT.fulfilled, (state, action: PayloadAction<IClubs>) => {
          // Add user to the state array
          state.clubs  = action.payload;
        })
      },
});

export const clubs = (state) => state.clubsliga;

export const { clubsFetched, errorFetchingClubs, fetchClubs } = clubsSlice.actions;

export const clubsReducer =  clubsSlice.reducer;*/
