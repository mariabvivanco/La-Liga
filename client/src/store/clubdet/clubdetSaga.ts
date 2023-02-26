import { takeEvery, put, select } from 'redux-saga/effects';

import { deleteClub, clubdetRequest, clubdetError, clubdetSuccess} from './clubdetSlicer';

import { getClubAxios } from '../../services/ClubsServices';



export function* getClub() {
  console.log('si me entere')

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
    console.log('error', e);
    yield put(clubdetError('Error al obtenerel club'));
  }
}
export default function* clubdetSaga() {
 
 console.log('si llaman a la saga')
  yield takeEvery(clubdetRequest.type, getClub);
 

}

export {};
