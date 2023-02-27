//Slicer para los detalles de un club

import { createSlice} from '@reduxjs/toolkit';
import { RootState } from '..';
import { IClubs } from '../../types/IClubs';

interface IClubsState {
  clubs: IClubs;
  offset: number;
  limit:number;
  favorite:boolean;
  error: string;
  name_like?: string;
  status: 'pending' | 'loading' | 'idle' | 'success'; 
}

const initialState: IClubsState = {
    clubs : {results:[], total:0},
    offset: 0,
    limit:6,
    error: '',
    status: 'idle',
    favorite:false  
};

export const clubsSlice = createSlice({
  name: 'clubs',
  initialState,
  reducers: {
    initClubs:(state) => {
      state.favorite=false;
      state.offset=0;
      state.clubs={results:[], total:0}
  },
    updateClubs:(state) => {
      state.status = 'idle',
      state.clubs.results = [...state.clubs.results];
  },
    clubsRequest: (state) => {
        state.status = 'pending'
    },
    clubsSuccess: (state, action) => {
        state.clubs = action.payload;
        state.clubs.results = [...state.clubs.results];
        state.status = 'idle'
    },
    clubsError: (state, action) => {
        state.clubs = {results:[], total:0};
        state.error = action.payload;
    },
    setOffset: (state, action) => {
      state.offset = action.payload;
      state.clubs.results = [...state.clubs.results];
    },
    setLimit: (state, action) => {
        state.limit = action.payload;
      },
    setFavorite: (state) => {
        state.favorite = !state.favorite;
        state.clubs.results = [...state.clubs.results];
        state.offset = 0;
      },
      setSearch: (state, action) => {
        state.name_like = action.payload;
        state.clubs.results = [...state.clubs.results];
        state.offset = 0;
        
      },

    
  },
});

export const clubs = (state: RootState) => state.reducer.clubs.clubs;
export const limit = (state: RootState) => state.reducer.clubs.limit;
export const favorite = (state: RootState) => state.reducer.clubs.favorite;
export const offset = (state: RootState) => state.reducer.clubs.offset;
export const search = (state: RootState) => state.reducer.clubs.name_like;


export const { setFavorite, setOffset, setLimit, setSearch, initClubs, clubsSuccess, clubsError, clubsRequest, updateClubs } =
  clubsSlice.actions;
export default clubsSlice.reducer;
