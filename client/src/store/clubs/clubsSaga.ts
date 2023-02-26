import { takeEvery, put, select } from 'redux-saga/effects';

import { setFavorite, setOffset, setSearch, clubsSuccess, clubsError, clubsRequest, updateClubs} from './clubsSlicer';

import { getClubsAxios } from '../../services/ClubsServices';



export function* getClubs() {
 let  temp
  try {
    

    const token: string = yield select(
      (state) => state.reducer.auth.token
    );

    if (token!==''){
      const limit: number = yield select(
        (state) => state.reducer.clubs.limit
      );
      const offset: number = yield select(
        (state) => state.reducer.clubs.offset
      );

      const name_like: string = yield select(
        (state) => state.reducer.clubs.name_like
      );

      const favorite: boolean = yield select(
        (state) => state.reducer.clubs.favorite
      );

      


      const result: string = yield getClubsAxios(token,{
        offset,
        limit,
        name_like,
        favorite:favorite?favorite:temp
        
      });
      yield put(clubsSuccess(result));
     

    }

  
  } catch (e) {
    console.log('error', e);
    yield put(clubsError('Error al obtener los clubs'));
  }
}
export default function* clubsSaga() {
 
  yield takeEvery(setFavorite.type, getClubs);
  yield takeEvery(setOffset.type, getClubs);
  yield takeEvery(setSearch.type, getClubs);
  yield takeEvery(clubsRequest.type, getClubs);
  yield takeEvery(updateClubs.type, getClubs);

}

export {};
