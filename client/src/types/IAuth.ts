//Interfaces relacionadas con la autenticación

export interface ILogin {
  email: string;
  password: string;
}

export interface IResponseLogin {
  token: string;
}
