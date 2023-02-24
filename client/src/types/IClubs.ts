//Interfaces relacionadas con los clubs

export interface IClubs {
  results: IClub[];
  total: number;
}

export interface IClub {
  id: string;
  name: string;
  foundationDate: Date;
  avatar: string;
  favorite: boolean;
}

export interface IClubDet {
  id: string;
  name: string;
  foundationDate: Date;
  avatar: string;
  favorite: boolean;
  players: IPlayer[];
}

export interface IPlayer {
  id: string;
  avatar: string;
  firstName: string;
  lastName: string;
  email: string;
  clubId: string;
  stats: IStat[];
}

export interface IStat {
  id: string;
  season: string;
  kicksToGoal: number;
  goals: number;
  goalsPercentage: number;
  goalPasses: number;
  intercepts: number;
  score: number;
}

//ojo esto tengo que quitarlo deaqui van a ser parametros
export interface IGetClubs {
  offset: number;
  limit: number;
  favorite: boolean;
  name_like: string;
}
