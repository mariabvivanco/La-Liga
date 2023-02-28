# Prueba técnica React de LaLiga

- Versión de Node >= 14.18.0
- Versión de Yarn >= 1.22.18
- Compatibilidad: ES6 Navegadores evergreen (Chrome, Firefox, Edge, Safari)

## Instrucciones

- [Instrucciones](client/src/docs/laliga-prueba-tecnica-instrucciones.md)

## Entorno de desarrollo local

### Estructura del proyecto

```text
|--carpeta-raiz
    |
    |--client
    |
    |--server
```

- En **client** es donde realizarás la prueba técnica solicitada.
- En **server** está incluida la API que debes consumir para tu desarrollo.
- <u>En server **no debes hacer ninguna modificación**</u>.
- <u>**Debes enviar la prueba respetando esta estructura. Has de incluir tanto `client` como `server`**</u>.
- <u>**No respetar esta estructura es motivo de DESCALIFICACIÓN AUTOMÁTICA**</u>.
  <br />
  <br />

## Instalación y ejecución de `server`

```bash
cd server
yarn && yarn start

```

> Por defecto el servidor local de back se despliega en http://localhost:4000

> Puedes consultar la API en http://localhost:4000/api-docs/

<br />
<br />

## Instalación y ejecución de `client`

```bash
cd client
yarn && yarn start
```

> Por defecto el servidor local de front se despliega en http://localhost:3000

  <br />
  <br />

## Memoria

### Estructura del proyecto
Se que esto es subjetivo y puede ser cuestionable por lo que explico los criterios en que me basé para diseñar la estructura

|--src
    |
    |--api (Se configura la url base de la  api)
    |
    |--components (Todos los componentes del proyecto, cada uno en la carpeta de la vista a la que pertenece)
    |
    |--hooks (Contienen un fichero utils con algunas funciones utilizadas por los componentes)
    |
    |--pages (Vistas del proyecto: Login, Clubs y ClubDet )
    |
    |--routes (Establece las rutas del proyecto, los tratamientos para públicas y privadas y el Router de la App, cada uno en un fichero)
    |
    |--services (Funciones axios que invocan al back divididas en clubs o auth)
    |
    |--store (Todo lo relacionado con el estado de la App, decidí dividirlo en auth, clubs y clubdet y cada uno tiene su slicer y su saga y en index de la carpeta store se combinan los reducer y se lanzan las saga. )
    |
    |--tests (Incluye todos los test existentes, como solo son los que tienen relación con la vista login los dejé ahí pero si hubiesen sido de todo el proyecto lo correcto hubiese sido crear una estructura de carpeta idem a la del proyecto)
    |
    |--types (Interfaces de la App usadas en varios lugares)

</br>
### Implementado adicionalmente

- Una vista elemental de detalles del club que me prmitiera mostrar el paginado entre páginas (se accede pinchando el club que se quiere ver en la tabla)
- Un header para las páginas de clubs y detalles de un club donde se encuentra el deslogueo y en el logo se regresa  a la página principal

</br>
### Cosas que noto en falta por el tiempo de la prueba y coincidirme con el trabajo

- Implementar los test para el resto del proyecto y hacer algunos más complejos
- Implementar las traducciones usando I18N
- Implementar la opción de borrar un club que tenía el endpoint
- En git al ser yo sola lo fui desarrollando todo sobre la rama develop diferenciando funcionalidades por commit pero en un equipo hubiese hecho una rama para cada nueva funcionalidad.
```

