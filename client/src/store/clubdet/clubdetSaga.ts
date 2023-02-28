//Saga relacionada con los detalles de un club.

import { takeEvery, put, select } from 'redux-saga/effects';

import { clubdetRequest, clubdetError, clubdetSuccess} from './clubdetSlicer';

import { getClubAxios } from '../../services/ClubsServices';


export function* getClub() {
  
  try {   
    const token: string = yield select(
      (state) => state.reducer.auth.token
    );

    if (token!==''){
      const id: string = yield select(
        (state) => state.reducer.clubdet.id)
      const result: string = yield getClubAxios(token,id
        );
      yield put(clubdetSuccess(result));    

    }
  } catch (e) {
      yield put(clubdetError('Error al obtener el club'));
  }
}

export default function* clubdetSaga() {
 
  yield takeEvery(clubdetRequest.type, getClub);

}

export {};
