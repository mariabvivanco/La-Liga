import axios from 'axios';

//Fichero con la configuración básica del url e interceptores que son usados a lo largo de todo el proyecto.

const baseURL = 'http://localhost:4000/';

const ligaAxios = axios.create({ baseURL });

export default ligaAxios;
