//Peticiones axios relacionadas con el login

import ligaAxios from '../api';
import { ILogin } from '../types/IAuth';

export const postLogin = async (dataLogin: ILogin) => {
  console.log('me llamaron con ', dataLogin);

  const response = await ligaAxios({
    method: 'post',
    url: 'http://localhost:4000/login',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    data: dataLogin,
  });

  console.log('respondi ', response);
  return response.data.token;
};
