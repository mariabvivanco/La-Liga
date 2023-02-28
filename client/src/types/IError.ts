//Interfaces relacionadas con errores devueltos

export interface IAxiosError {
  status: number;
  message: string;
}

export interface IModalError {
  imagURL : string;
  title: string;
  message: string;
}
