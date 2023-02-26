import { createSlice} from '@reduxjs/toolkit';


import { RootState } from '..';
import { IClubDet } from '../../types/IClubs';

interface IClubState {
  club?: IClubDet;
  id:string;
  error: string;
  status: 'pending' | 'loading' | 'idle' | 'success'; 
}

const initialState: IClubState = {
    error: '',
    status: 'idle',
    id:''
    
};



export const clubdetSlice = createSlice({
  name: 'clubdet',
  initialState,
  reducers: {
    deleteClub:(state) => {
      state.status = 'idle'
      
  },
    clubdetRequest: (state, action) => {
      state.id=action.payload
        state.status = 'pending'
        console.log(state.id)
    },
    clubdetSuccess: (state, action) => {
        state.club = action.payload;
        state.status = 'idle'
    },
    clubdetError: (state, action) => {
        
        state.error = action.payload;
    },
    
    
  },
});

export const club = (state: RootState) => state.reducer.clubdet.club;

export const id = (state: RootState) => state.reducer.clubdet.id;

export const { deleteClub, clubdetRequest, clubdetSuccess, clubdetError } =
  clubdetSlice.actions;
export default clubdetSlice.reducer;
