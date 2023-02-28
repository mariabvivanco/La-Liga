//Fichero con la configuración básica del url e interceptores que son usados a lo largo de todo el proyecto.

import axios from 'axios';

const baseURL = 'http://localhost:4000/';

const ligaAxios = axios.create({ baseURL });

export default ligaAxios;
