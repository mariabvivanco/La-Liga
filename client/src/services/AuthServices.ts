//Peticiones axios relacionadas con el login

import ligaAxios from '../api';
import { ILogin } from '../types/IAuth';

export const postLogin = async (dataLogin: ILogin) => {

  const response = await ligaAxios({
    method: 'post',
    url: '/login',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    data: dataLogin,
  });


  return response.data.token;
};
