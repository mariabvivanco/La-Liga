//Peticiones axios relacionadas con los clubs

import ligaAxios from '../api';

export interface IParamsClubs {
  offset: number,
  limit: number,
  favorite?: boolean,
  name_likes?: string,
}

export const getClubsAxios = async ( token: string, params?: IParamsClubs,
 
) => {
  const response = await ligaAxios({
    method: 'get',
    url: 'api/clubs',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization':  "Bearer "+token
    },
    params,
  });
  return response.data;
};

export const getClubAxios = async (club: string) => {
  const response = await ligaAxios({
    method: 'get',
    url: 'api/clubs/' + club,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
  return response.data;
};

export const deleteClub = async (club: string) => {
  const response = await ligaAxios({
    method: 'delete',
    url: 'api/clubs/' + club,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
  return response.data;
};

export const updateFavorite = async (club: string, favorite: boolean) => {
  const response = await ligaAxios({
    method: 'patch',
    url: 'api/clubs/' + club,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    data: favorite,
  });

  return response.data;
};