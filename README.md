# Grupo 18

#### Integrantes:

> - Andrés Aguayo
> - Alesio Cragno
> - Fabricio Maida
> - Ailén Villalba
> - Valentina Vitale

---

Usuario de prueba para testeo:
> correo: admin@correo.com
> contraseña: Admin1234

---

### Metodología de trabajo con Git y GitHub.

Se utilizó Git para el control de versiones y GitHub para el trabajo colaborativo.

Flujo de trabajo:

1. Creación de ramas individuales para cada integrante.
2. Desarrollo de funcionalidades en ramas de integrantes.
3. Creación de Pull Requests.
4. Revisión de código.
5. Integración a la rama principal (main).

### Despliegues en Render y Netlify:

Se utilizó Render para el despliegue del backend:
https://proyecto-final-prog3.onrender.com/

Se utilizó Netlify para el despliegue del frontend:
https://proyecto-final-prog3.netlify.app/

## División de las tareas entre los integrantes.

> **Valentina Vitale y Alesio Cragno**:
>
> - Implementacion de TODO's en authController.js
> - Implementacion de videojuegoController.js
> - Implementacion de videojuegoRoutes.js
> - Documentacion en el README.md

> **Andrés Aguayo y Fabricio Maida**:
>
> - Implementación y diseño de todos los seeders
> - Implementación y diseño de coleccionesValidator.middleware.js
> - Implementación de los seeders en server.js
> - Implementación de colecciones.json

> **Ailén Villalba y Fabricio Maida**:
>
> - Implementación de los ToDo's del userModel.ts

> **Fabricio Maida**:
>
> - Implementación y diseñado del Diagrama de Entidad/Relación (Diagrama ER Proyecto.png)

> **Andrés Aguayo**:
>
> - Implementación y diseño de las interfaces
> - Implementación de los ToDo's del middleware/auth.js
> - Implementación de videojuegosValidator.middleware.js
> - Implementación y migración de modelos a typescript
> - Configuraciones generales y arreglos varios

> **Ailén Villalba**:
>
> - Implementación de coleccionController.js
> - Implementación de coleccionRoutes.js

---

## Diagrama ER y Modelo Relacional del proyecto:

[Diagrama ER y Modelo Relacional](Diagrama%20ER%20Proyecto.png)

---

## Distribución de los archivos y carpetas.

### BACKEND:

### config

- `config.js`: Configura la conexión a la base de datos postgreSQL para los entornos del desarrollo, pruebas y producción, utlizando variables de entorno para definir los parámetros de conexión.
- `database.js`: Este archivo guarda la configuración para conectarse a la base de datos, usando los datos definidos en las variables de entorno.

---

### controllers

- `videojuegoController.js`: Este archivo se encarga de manejar las operaciones relacionadas con los videojuegos en la aplicación, permitiendo consultar la información almacenada y registrar nuevos videojuegos en la base de datos, además de manejar los posibles errores que puedan ocurrir durante el proceso.
- `authController.js`: Este archivo es el controlador de autenticación y se encarga de registrar usuarios, iniciar sesión verificando sus credenciales y devolver el perfil del usuario verificado.
- `coleccionController`: define el controlador de la colección, encargándose de obtener, buscar, crear y actualizar los videojuegos que un usuario tiene en su colección dentro de la base de datos.

---

### data

- `videojuegos.json`: Contiende un listado de todos los videojuegos.
- `colecciones.json`: Contiene la coleccion de juegos de un usuario.

---

### interfaces

- `coleccionInterface.ts`: Define la estructura que debe tener un objeto de tipo colección, indicando que datos debe contener y el tipo de cada uno.
- `videojuegoInterface.ts`: Define la estructura que debe tener un objeto de tipo videojuego, indicando que datos debe contener y el tipo de cada uno.
- `userInterface.ts`: Define la estructura que debe tener un objeto de tipo user, indicando que datos debe contener y el tipo de cada uno.

---

### middleware

- `auth.js`: Este archivo se encarga de generar y verificar tokens JWT para autenticar usuarios y proteger las rutas de la aplicación.
- `videojuegosValidator.middleware.js`: Valida que los datos enviados para un videojuego tengan el tipo correcto antes de continuar con la solicitud. Si encuentra errores, devuelve una respuesta indicando cuales son.
- `coleccionesValidator.middleware.js`: Se encarga de validar que los datos de una colección de videojuegos sean correctos antes de procesarlos, y si encuentra algún dato inválido devuelve un mensaje de error.

---

### models

- `cardinalidadesModel.ts`: Define la relación entre los modelos User, Videojuego y Coleccion, estableciendo que un usuario puede tener muchos videojuegos y que un videojuego puede pertenecer a muchos usuarios, utilizando la tabla Coleccion como intermediaria.
- `userModel.ts`: Define el modelo User, que representa a los usuarios de la aplicación y establece los datos que se almacenan en la base de datos. Además, incluye lógica para encriptar la contraseña antes de guardarla, validarla al iniciar sesión y evitar que se exponga cuando se devuelve la información del usuario.
- `coleccionModel.ts`: Define el modelo colección de la base de datos, indicando que datos almacena cada registro y proporcionando métodos para buscar juegos dentro de la colección de un usuario.
- `videojuegoModel.ts`: Define el modelo videojuego, especifica los datos que almacena cada videojuego en la base de datos y proporciona métodos para buscar, crear y obtener videojuegos.
- `indexModel.ts`: Configura la conexión con la base de datos mediante Sequelize y verifica que la conexión se haya realizado correctamente al iniciarse.

---

### routes

- `auth.js`: Define las rutas de autenticación de la API, permitiendo registrar usuarios, iniciar sesión y acceder al perfil de un usuario autentificado.
- `coleccionRoutes.js`: Define las rutas para gestionar la colección de videojuegos, permitiendo consultar, modificar y eliminar los juegos asociados a una colección.
- `videojuegoRoutes.js`: Define las rutas para gestionar los videojuegos, permitiendo obtener las lista de juegos, buscar uno por su ID y crear nuevos videojuegos.
- `index.js`: Centraliza las rutas principales de la API utilizando `router.get()` para definir endpoints de prueba y verificación del servidor, `router.use()` para incorporar las rutas de autenticación y videojuegos, y `module.exports` para exportar el enrutador y utilizarlo en el resto de la aplicación.

---

### seeders

- `seederColeccion.js`: Carga datos iniciales de colecciones en la base de datos a partir de un archivo JSON, verificando primero si ya existen registros para evitar duplicarlos.
- `seederUser.js`: Carga automáticamente un usuario inicial en la base de datos para que la aplicación tenga un usuario de prueba. Antes de crearlo verifica si ya existe un usuario con ese email y si no existe, lo crea con los datos definidos; si ya está creado, evita duplicarlo e informa el resultado por consola.
- `seederVideojuego.js`: Se encarga de cargar automáticamente videojuegos iniciales en la base de datos leyendo un archivo videojuegos.json. Antes de insertarlos verifica si ya existen registros para evitar duplicarlos y si la carga es correcta los agrega todos de una vez utilizando bulkCreate.

---

### package.json

- Este archivo define la configuración del proyecto Node.js, incluyendo su información general, las dependencias que utiliza y los comando para ejecutar, desarrollar y probar la aplicación.

---

### server.js

- Este archivo configura e inicia el servidor Express, establece la conexión con la base de datos, carga los middlewares y las rutas de la API, y maneja el inicio y cierre de la aplicación.

---

### tsconfig.json

- Configuración del TypeScript.

---

#### FUNCIONES:

### controllers

> videojuegoController.js:

- `getAllVideojuegos`: Se encarga de traer y mostrar la lista completa de videojuegos guardados.
- `getVideojuegoById`: Busca un videojuego específico utilizando su ID.
- `postVideojuego`: Recibe datos para guardar un nuevo videojuego en el sistema.

> authController.js:

- `register`: Permite a un nuevo usuario crear una cuenta en la aplicación.
- `login`: Valida las credenciales de un usuario que ya tiene cuenta para darle acceso.
- `perfil`: Devuelve la información del usuario que está haciendo la consulta, siempre y cuando ya esté autenticado.

> coleccionController.js:

- `getAllColecciones`: Trae todos los registros de colecciones almacenados en el sistema sin filtrar y los devuelve con un estado 200.
- `getAllColeccionesUsuario`: Busca todos los videojuegos que pertenecen a un usuario específico. Extrae el `userId` de los parámetros de la URL, consulta a la base de datos y, si encuentra datos, los devuelve. Si no encuentra nada, retorna un error 404.
- `getColeccionById`: Busca un registro exacto de un usuario con un videojuego en particular. Combina el `userId` (que viene en la URL) con el `videojuegoId` (que curiosamente viaja en el cuerpo del `req.body`) para verificar si esa vinculación existe.
- `postColeccion`: Añade un videojuego a la biblioteca de un usuario. Recibe los datos del juego y del usuario junto con datos extra (estado, calificacion, tiempoJuego) y ejecuta un método para insertarlo en la base de datos.
- `putColeccion`: Modifica los detalles de un juego que el usuario ya tenía en su colección (por ejemplo, si le quiere cambiar la calificación o sumarle horas de juego). Identifica la colección mediante el `userId` y `videojuegoId`, verifica que exista y luego actualiza los campos permitidos (estado, calificacion, tiempoJuego) usando `.update().`

---

### middleware

> auth.js:

- `generarToken`: Es la función que crea el token cuando el usuario se registra o inicia sesión con éxito. Toma el id y el email del usuario y los firma, cifrandolos con una clave secreta. Además, le configura un tiempo de vencimiento de 24 horas.
- `verificarToken`: protege rutas privadas extrayendo el token del encabezado authorization y validando su autenticidad con jwt.verify(). Si el token expiró o es inválido, interrumpe el flujo con un estado 401, de lo contrario, guarda los datos decodificados en req.user y ejecuta next() para dar paso al controlador.

> videojuegosValidator.middleware.js:

- `validateInputVideojuegos(req, res, next)`: encargado de inspeccionar las peticiones entrantes validando que los campos opcionales del cuerpo (nombre, descripcion, genero y plataforma) correspondan estrictamente al tipo de dato string. Si se detecta alguna diferencia de tipo, interrumpe el flujo acumulando los fallos y respondiendo con un estado 400, en caso contrario, next() transfiere el control al controlador de la ruta.

> coleccionesValidator.middleware.js:

- valida los datos recibidos antes de agregar o modificar una colección de videojuegos. Revisa que `videojuegoId` sea un número válido al crear una nueva colección, que estado tenga uno de los valores permitidos (pendiente, jugando o completado), que calificacion esté entre 0 y 10 y que `tiempoJuego` sea un número positivo. Si encuentra errores, los devuelve con una respuesta `400`; si todo es correcto, ejecuta `next()` para que la solicitud continúe al siguiente paso.

---

### models

> cardinalidadesModel.ts:

- La función `establecerCardinalidad()` conecta las tablas de la base de datos configurando una relación de muchos a muchos entre `Usuarios` y `Videojuegos` a través del método `belongsToMany`. Establece que un usuario puede tener múltiples videojuegos y un videojuego pertenecer a múltiples usuarios, utilizando el modelo intermedio `Coleccion` (con sus llaves userId y videojuegoId) como el puente organizado para vincular ambas tablas.

> userModel.ts:

- Este archivo utiliza `User.init()` para definir la estructura del modelo User en la base de datos, implementa el método `validarContrasenia()` para comprobar si una contraseña coincide con la almacenada mediante `bcrypt.compare()`, redefine `toJSON()` para ocultar la contraseña al devolver los datos del usuario y emplea el hook `beforeCreate` junto con `bcrypt.hash()` para encriptar la contraseña antes de guardarla en la base de datos.

> coleccionModel.ts:

- Define la tabla colecciones en la base de datos, la cual sirve para unir a los usuarios con sus videojuegos. Utiliza los identificadores userId y videojuegoId como una llave doble para saber a quién le pertenece cada juego, y guarda detalles de la partida como el estado (pendiente, jugando o completado), la nota y el tiempo jugado. Además, incluye funciones rápidas para buscar directamente las colecciones completas de un usuario o un juego específico en su biblioteca.

> videojuegoModel.ts:

- Este archivo utiliza `Videojuego.init()` para definir la estructura del modelo Videojuego en la base de datos y crea métodos como `findAllVideogames()`, `findById()`, `createVideojuego()` y `findLastOne()` para obtener, buscar, crear y consultar videojuegos mediante Sequelize.

> indexModel.ts:

- Este archivo utiliza `new Sequelize()` para crear la conexión con la base de datos a partir de la configuración del entorno, implementa la función `verificarConexion()` para comprobar que la conexión se haya realizado correctamente mediante `sequelize.authenticate()` y exporta la instancia de sequelize y Sequelize para que puedan utilizarse en el resto de la aplicación.

---

### routes

> auth.js:

- Este archivo utiliza `router.post()` para definir las rutas de registro e inicio de sesión, `router.get()` para acceder al perfil del usuario y el middleware `verificarToken` para proteger esa ruta, exportando finalmente todas las rutas de autenticación para que puedan ser usadas por la aplicación.

> coleccionRoutes.js:

- Este archivo utiliza `router.get()`, `router.post()` y `outer.put()` para definir las rutas relacionadas con la colección de videojuegos, permitiendo obtener las colecciones, consultar una colección específica, agregar videojuegos y actualizar la información de una colección, enlazando cada ruta con su función correspondiente del controlador.

> index.js:

- Este archivo utiliza `new Sequelize()` para crear la conexión con la base de datos a partir de la configuración del entorno, inicializa el modelo `User` mediante `UserModel(sequelize)` y exporta la conexión y los modelos con `module.exports` para que puedan ser utilizados en el resto de la aplicación.

> videojuegoRoutes.js:

- Este archivo utiliza `router.get()` para definir las rutas que permiten obtener todos los videojuegos o buscar uno por su ID, `router.post()` para crear un nuevo videojuego y `module.exports` para exportar el conjunto de rutas y que puedan ser utilizadas por la aplicación.

---

### server.js

- Este archivo utiliza la clase `Server` para configurar e iniciar el servidor `Express`. EN ella emplea `middleware()` para registrar los middlewares de seguridad y procesamiento de solicitudes, `routes()` para definir las rutas de la API y el manejo de errores, `databaseConfig()` para sincronizar los modelos con la base de datos y `startServer()` para verificar la conexión e iniciar el servidor. Además, utiliza `process.on()` para cerrar correctamente la conexión con la base de datos cuando la aplicación finaliza.

---

### LINK DEL RENDER:

https://proyecto-final-prog3.onrender.com/

---

### DOCUMENTACIÓN DE POSTMAN:

https://documenter.getpostman.com/view/55388250/2sBXwvL9Vv

---

## Arquitectura General

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   Caddy     │    │   React     │    │   Express   │
│  (Proxy)    │◄──►│ (Frontend)  │◄──►│  (Backend)  │
│   :80       │    │   :3000     │    │   :3001     │
└─────────────┘    └─────────────┘    └─────────────┘
                                              │
                   ┌─────────────┐    ┌─────────────┐
                   │    Redis    │    │ PostgreSQL  │
                   │  (Cache)    │    │    (DB)     │
                   │   :6379     │    │   :5432     │
                   └─────────────┘    └─────────────┘
```

Todos los servicios corren dentro de contenedores Docker y se comunican a traves de una red interna (`app_network`). Caddy actua como reverse proxy: recibe todo el trafico en el puerto 80 y lo redirige al frontend o al backend segun la URL.

| Servicio     | Tecnologia          | Puerto | Funcion                        |
| ------------ | ------------------- | ------ | ------------------------------ |
| **Frontend** | React 18            | 3000   | Interfaz de usuario            |
| **Backend**  | Express + Sequelize | 3001   | API REST                       |
| **Database** | PostgreSQL 15       | 5432   | Base de datos relacional       |
| **Cache**    | Redis 7             | 6379   | Cache y sesiones               |
| **Proxy**    | Caddy 2             | 80     | Reverse proxy                  |
| **pgAdmin**  | pgAdmin 4           | 5050   | Administracion visual de la BD |

---

## Inicio Rapido

### Requisitos previos

- [Docker](https://docs.docker.com/get-docker/) y [Docker Compose](https://docs.docker.com/compose/install/) instalados.

### Levantar el proyecto

```bash
# Construir las imagenes (solo la primera vez o cuando cambien dependencias)
docker-compose build

# Iniciar todos los servicios
docker-compose up
```

Una vez que todo este corriendo, podes acceder a:

| Recurso          | URL                          |
| ---------------- | ---------------------------- |
| Frontend (React) | http://localhost:3000        |
| Backend API      | http://localhost:3001/api    |
| Health check     | http://localhost:3001/health |
| Proxy (Caddy)    | http://localhost             |
| pgAdmin          | http://localhost:5050        |

> **Tip:** Si queres correrlo en segundo plano, usa `docker-compose up -d`. Para ver los logs: `docker-compose logs -f`.

### Detener el proyecto

```bash
# Detener los servicios (mantiene los datos)
docker-compose down

# Detener y borrar todos los datos (base de datos, cache, etc.)
docker-compose down -v
```

---

## Estructura del Proyecto

```
proyecto/
├── docker-compose.yml              # Orquestacion de todos los servicios
├── .gitignore
├── README.md
│
├── backend/
│   ├── Dockerfile.dev               # Imagen Docker para desarrollo
│   ├── package.json
│   ├── server.js                    # Punto de entrada del servidor Express
│   ├── config/
│   │   ├── config.js                # Config de Sequelize CLI (migraciones)
│   │   └── database.js              # Config de conexion a PostgreSQL
│   ├── models/
│   │   ├── index.js                 # Inicializa Sequelize y registra modelos
│   │   └── User.js                  # Modelo de usuario (tiene TODOs)
│   ├── controllers/
│   │   └── authController.js        # Logica de registro, login y perfil (tiene TODOs)
│   ├── middleware/
│   │   └── auth.js                  # Generacion y verificacion de JWT (tiene TODOs)
│   ├── routes/
│   │   ├── index.js                 # Router principal, monta /api/auth
│   │   └── auth.js                  # Rutas de autenticacion
│   ├── migrations/                  # Migraciones de base de datos
│   ├── seeders/                     # Datos de prueba
│   ├── tests/                       # Tests
│   └── utils/                       # Funciones auxiliares
│
├── frontend/
│   ├── Dockerfile.dev
│   ├── package.json
│   ├── public/
│   │   └── index.html
│   └── src/
│       ├── index.js                 # Punto de entrada de React
│       ├── App.js                   # Componente principal
│       ├── components/              # Componentes reutilizables
│       │   ├── common/
│       │   ├── layout/
│       │   └── ui/
│       ├── pages/                   # Paginas de la aplicacion
│       ├── services/                # Llamadas a la API (axios)
│       ├── hooks/                   # Custom hooks de React
│       ├── utils/                   # Funciones auxiliares
│       ├── styles/                  # Estilos globales
│       └── assets/                  # Imagenes, iconos, etc.
│
├── database/
│   └── init.sql                     # Script que se ejecuta al crear la BD
│
├── caddy/
│   └── Caddyfile                    # Configuracion del reverse proxy
│
└── pgadmin/
    ├── Dockerfile
    ├── servers.json                 # Conexion preconfigurada al PostgreSQL
    └── pgpass                       # Credenciales de la BD
```

---

## Que Hay Que Completar: Autenticacion JWT

El sistema de autenticacion esta parcialmente implementado. Hay **8 TODOs** distribuidos en 3 archivos que deben ser completados para que funcione.

### Como funciona JWT (teoria)

1. El usuario se **registra** enviando nombre, email y password.
2. El servidor **hashea** la password (nunca se guarda en texto plano) y crea el usuario en la BD.
3. El servidor genera un **token JWT** (un string firmado que contiene el id y email del usuario) y se lo devuelve.
4. Para las siguientes peticiones, el cliente envia el token en el header `Authorization: Bearer <token>`.
5. El servidor **verifica** que el token sea valido y no haya expirado antes de dar acceso.

### Endpoints de la API

| Metodo | Ruta                 | Protegida | Descripcion                        |
| ------ | -------------------- | --------- | ---------------------------------- |
| `POST` | `/api/auth/register` | No        | Registrar un nuevo usuario         |
| `POST` | `/api/auth/login`    | No        | Iniciar sesion                     |
| `GET`  | `/api/auth/perfil`   | Si        | Obtener datos del usuario logueado |

#### Ejemplo: Registro

```bash
curl -X POST http://localhost:3001/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"nombre": "Juan", "email": "juan@test.com", "password": "123456"}'
```

Respuesta esperada (una vez completados los TODOs):

```json
{
  "message": "Usuario registrado exitosamente",
  "user": { "id": 1, "nombre": "Juan", "email": "juan@test.com" },
  "token": "eyJhbGciOiJIUzI1NiIs..."
}
```

#### Ejemplo: Login

```bash
curl -X POST http://localhost:3001/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email": "juan@test.com", "password": "123456"}'
```

#### Ejemplo: Acceder al perfil (ruta protegida)

```bash
curl http://localhost:3001/api/auth/perfil \
  -H "Authorization: Bearer <token_obtenido_en_login>"
```

### Archivos con TODOs

A continuacion se detalla cada TODO. **No cambies la estructura de los archivos**, solo completa las partes indicadas.

---

### 1. `backend/models/User.js` — Modelo de usuario

Este archivo define la tabla `users` en la base de datos usando Sequelize.

**TODO 1 — Hook `beforeCreate`:** Antes de guardar un usuario nuevo, hay que hashear la password para no almacenarla en texto plano.

```javascript
// Pista: bcrypt.hash(user.password, 10) devuelve una promesa con el hash.
// Hay que asignar el resultado a user.password.
```

**TODO 2 — Metodo `validarPassword`:** Este metodo compara una password en texto plano con el hash almacenado. Se usa en el login.

```javascript
// Pista: bcrypt.compare(password, this.password) devuelve true o false.
```

---

### 2. `backend/middleware/auth.js` — Generacion y verificacion de tokens

Este archivo exporta dos funciones: una para crear tokens y otra para verificar que un request tenga un token valido.

**TODO 3 — `generarToken`:** Crear un JWT firmado con los datos del usuario.

```javascript
// Pista: jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '24h' })
```

**TODO 4 — Extraer el token del header:** El header `Authorization` tiene el formato `"Bearer eyJhbG..."`. Hay que extraer solo la parte del token.

```javascript
// Pista: authHeader.split(' ') devuelve un array ["Bearer", "eyJhbG..."].
// El token esta en la posicion [1].
```

**TODO 5 — `verificarToken`:** Decodificar el token y, si es valido, guardar los datos del usuario en `req.user` para que los controladores puedan usarlos.

```javascript
// Pista: jwt.verify(token, JWT_SECRET) devuelve el payload decodificado.
// Guardar el resultado en req.user y llamar a next().
```

---

### 3. `backend/controllers/authController.js` — Logica de registro, login y perfil

Este archivo tiene la logica de negocio de cada endpoint.

**TODO 6 — `register`:** Crear el usuario en la base de datos.

```javascript
// Pista: await User.create({ nombre, email, password })
// El hook beforeCreate se encarga de hashear la password automaticamente.
```

**TODO 7 — `login`:** Buscar al usuario por email y validar su password.

```javascript
// Pista para buscar: await User.findOne({ where: { email } })
// Pista para validar: await user.validarPassword(password)
```

**TODO 8 — `perfil`:** Obtener el usuario desde la BD usando el id que el middleware puso en `req.user`.

```javascript
// Pista: await User.findByPk(req.user.id)
```

---

### Como verificar que funciona

Una vez completados los 8 TODOs:

```bash
# 1. Levantar los servicios
docker-compose up

# 2. Registrar un usuario
curl -X POST http://localhost:3001/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"nombre": "Test", "email": "test@test.com", "password": "123456"}'

# 3. Hacer login (copiar el token de la respuesta)
curl -X POST http://localhost:3001/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email": "test@test.com", "password": "123456"}'

# 4. Acceder al perfil con el token
curl http://localhost:3001/api/auth/perfil \
  -H "Authorization: Bearer PEGAR_TOKEN_AQUI"
```

Si el paso 4 devuelve los datos del usuario, la autenticacion esta funcionando correctamente.

---

## Desarrollo con Hot Reload

Cuando los servicios estan corriendo, los cambios en el codigo se aplican automaticamente:

- **Frontend (React):** Cualquier cambio en `frontend/src/` se refleja al instante en el navegador gracias a Fast Refresh.
- **Backend (Express):** Cualquier cambio en `backend/` reinicia automaticamente el servidor gracias a nodemon.
- **Base de datos:** Los datos persisten entre reinicios gracias a los volumenes de Docker. Solo se pierden si ejecutas `docker-compose down -v`.

### Flujo de trabajo

1. Edita los archivos en tu editor (VS Code, etc.)
2. Los cambios se detectan automaticamente dentro del contenedor
3. El servicio correspondiente se recarga
4. Verifica en el navegador o con `curl`

---

## Base de Datos

### Acceso con pgAdmin (interfaz web)

pgAdmin ya viene preconfigurado para conectarse a la base de datos. Solo hay que entrar a:

- **URL:** http://localhost:5050
- **Email:** `admin@example.com`
- **Password:** `admin123`

La conexion al servidor PostgreSQL ya esta configurada automaticamente.

### Acceso por terminal

```bash
# Abrir una consola SQL directa
docker-compose exec database psql -U app_user -d app_database
```

### Credenciales de la BD

| Campo                        | Valor          |
| ---------------------------- | -------------- |
| Host (desde otro contenedor) | `database`     |
| Host (desde tu maquina)      | `localhost`    |
| Puerto                       | `5432`         |
| Base de datos                | `app_database` |
| Usuario                      | `app_user`     |
| Password                     | `app_password` |

### Migraciones y Seeders con Sequelize

Las migraciones permiten versionar cambios en la estructura de la BD. Los seeders insertan datos de prueba.

```bash
# Entrar al contenedor del backend
docker-compose exec backend sh

# Crear una nueva migracion
npx sequelize-cli migration:generate --name create-users

# Ejecutar migraciones pendientes
npx sequelize-cli db:migrate

# Deshacer la ultima migracion
npx sequelize-cli db:migrate:undo

# Ver estado de migraciones
npx sequelize-cli db:migrate:status

# Crear un seeder
npx sequelize-cli seed:generate --name demo-users

# Ejecutar todos los seeders
npx sequelize-cli db:seed:all

# Salir del contenedor
exit
```

### Backup y restauracion

```bash
# Exportar la base de datos
docker-compose exec database pg_dump -U app_user app_database > backup.sql

# Importar un backup
docker-compose exec -T database psql -U app_user -d app_database < backup.sql
```

---

## Variables de Entorno

Las variables de entorno del backend estan definidas directamente en `docker-compose.yml`, dentro del servicio `backend`. Las mas importantes son:

| Variable      | Valor                   | Descripcion                                   |
| ------------- | ----------------------- | --------------------------------------------- |
| `NODE_ENV`    | `development`           | Entorno de ejecucion                          |
| `PORT`        | `3001`                  | Puerto del servidor Express                   |
| `DB_HOST`     | `database`              | Nombre del servicio de PostgreSQL en Docker   |
| `DB_PORT`     | `5432`                  | Puerto de PostgreSQL                          |
| `DB_NAME`     | `app_database`          | Nombre de la base de datos                    |
| `DB_USER`     | `app_user`              | Usuario de la BD                              |
| `DB_PASSWORD` | `app_password`          | Password de la BD                             |
| `JWT_SECRET`  | `your_jwt_secret_here`  | Clave secreta para firmar los tokens JWT      |
| `CORS_ORIGIN` | `http://localhost:3000` | Origen permitido para peticiones del frontend |

> **Nota:** En un entorno de produccion, estas variables **nunca** deben estar en el codigo ni en el repositorio. Se usan archivos `.env` o secrets de Docker.

---

## Comandos Utiles

### Docker Compose

```bash
# Ver el estado de los contenedores
docker-compose ps

# Ver logs de un servicio en particular
docker-compose logs -f backend
docker-compose logs -f frontend
docker-compose logs -f database

# Reiniciar un servicio sin detener los demas
docker-compose restart backend

# Reconstruir un servicio (cuando cambias package.json o el Dockerfile)
docker-compose up --build backend

# Entrar al shell de un contenedor
docker-compose exec backend sh
docker-compose exec frontend sh

# Ver las variables de entorno dentro de un contenedor
docker-compose exec backend env
```

### Limpieza

```bash
# Detener servicios y borrar datos
docker-compose down -v

# Reconstruir todo desde cero (cuando nada funciona)
docker-compose down -v --rmi all
docker-compose build --no-cache
docker-compose up

# Liberar espacio de Docker en el sistema
docker system prune -a
```

---

## Problemas Comunes

### El backend no conecta a la base de datos

La base de datos tarda unos segundos en iniciar. El `docker-compose.yml` tiene un `healthcheck` para que el backend espere, pero a veces no alcanza.

```bash
# Verificar que la BD este corriendo
docker-compose ps database

# Ver los logs de PostgreSQL
docker-compose logs database

# Solucion nuclear: reiniciar con volumenes limpios
docker-compose down -v
docker-compose up --build
```

### Un puerto ya esta en uso

Si otro programa ya esta usando el puerto 3000, 3001 u 80:

```bash
# Ver que proceso usa el puerto
lsof -i :3000
# o en Linux
netstat -tlnp | grep :3000
```

Podes cambiar el puerto externo en `docker-compose.yml`. Por ejemplo, para mover el frontend al puerto 3002:

```yaml
ports:
  - "3002:3000" # externo:interno
```

### Hot reload no funciona

Verificar que estas variables esten en `docker-compose.yml` dentro del servicio `frontend`:

```yaml
environment:
  - CHOKIDAR_USEPOLLING=true
  - WATCHPACK_POLLING=true
```

Si sigue sin funcionar, reiniciar el servicio: `docker-compose restart frontend`.

### Error de permisos en Docker

```bash
sudo chown -R $USER:$USER .
chmod -R 755 .
```

### Error de credenciales de Docker Desktop (Windows/WSL)

```
error getting credentials - err: exec: "docker-credential-desktop.exe"
```

```bash
# Hacer backup de la config de Docker
cp ~/.docker/config.json ~/.docker/config.json.backup

# Resetear la config
echo '{}' > ~/.docker/config.json

# Intentar de nuevo
docker-compose build
```

---

## Tecnologias Utilizadas

### Backend

- **[Express](https://expressjs.com/)** — Framework web para Node.js
- **[Sequelize](https://sequelize.org/)** — ORM para bases de datos SQL
- **[jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)** — Generacion y verificacion de JWT
- **[bcryptjs](https://github.com/dcodeIO/bcrypt.js)** — Hashing de passwords
- **[helmet](https://helmetjs.github.io/)** — Headers de seguridad HTTP
- **[cors](https://github.com/expressjs/cors)** — Configuracion de Cross-Origin Resource Sharing
- **[morgan](https://github.com/expressjs/morgan)** — Logging de peticiones HTTP

### Frontend

- **[React 18](https://react.dev/)** — Biblioteca para interfaces de usuario
- **[React Router](https://reactrouter.com/)** — Navegacion SPA
- **[Axios](https://axios-http.com/)** — Cliente HTTP
- **[React Query](https://tanstack.com/query)** — Manejo de estado del servidor
- **[React Hook Form](https://react-hook-form.com/)** — Manejo de formularios
- **[Tailwind CSS](https://tailwindcss.com/)** — Framework de estilos utilitario

### Infraestructura

- **[Docker](https://docs.docker.com/)** — Contenedores
- **[Docker Compose](https://docs.docker.com/compose/)** — Orquestacion multi-contenedor
- **[PostgreSQL 15](https://www.postgresql.org/docs/15/)** — Base de datos relacional
- **[Redis 7](https://redis.io/docs/)** — Cache en memoria
- **[Caddy 2](https://caddyserver.com/docs/)** — Reverse proxy
- **[pgAdmin 4](https://www.pgadmin.org/docs/)** — Administracion visual de PostgreSQL

---

---

# Secciones Opcionales / Avanzadas

Las siguientes secciones cubren temas que van mas alla del desarrollo local. No son necesarias para completar el trabajo, pero son utiles si queres exponer tu proyecto a internet o desplegarlo en un servidor real.

---

## Opcional: Configurar Caddy para Produccion con HTTPS

### Que es Caddy y por que lo usamos

Caddy es un servidor web moderno que funciona como **reverse proxy** (intermediario entre el usuario y tus servicios). En este proyecto, Caddy recibe todas las peticiones en el puerto 80 y decide a donde mandarlas:

- Si la URL empieza con `/api` o `/health` → la envia al **backend** (Express, puerto 3001)
- Cualquier otra URL → la envia al **frontend** (React, puerto 3000)

```
Usuario → Caddy (:80) → /api/*    → Backend (:3001)
                       → /*        → Frontend (:3000)
```

La ventaja principal de Caddy sobre otros servidores como Nginx o Apache es que **configura HTTPS automaticamente**. Cuando le das un nombre de dominio, Caddy se encarga solo de:

1. Pedir un certificado SSL gratuito a Let's Encrypt
2. Instalarlo
3. Renovarlo automaticamente cada ~60 dias
4. Redirigir HTTP → HTTPS

Con Nginx, todo eso hay que configurarlo manualmente.

### Que se necesita para HTTPS

Para que Caddy active HTTPS automatico necesitas **dos cosas**:

1. **Un nombre de dominio** que apunte a la IP de tu servidor (por ejemplo `miproyecto.com` o `miproyecto.duckdns.org`)
2. **Que los puertos 80 y 443 esten abiertos** y accesibles desde internet

> **Nota:** HTTPS no funciona con `localhost` ni con direcciones IP directas. Se necesita un dominio.

### Configurar Caddy con un dominio

Si tenes un dominio apuntando a tu servidor, la configuracion es asi de simple. Editar `caddy/Caddyfile`:

```
miproyecto.com {
    handle /api/* {
        reverse_proxy backend:3001
    }

    handle /health {
        reverse_proxy backend:3001
    }

    handle {
        reverse_proxy frontend:3000
    }
}
```

El unico cambio respecto a la configuracion de desarrollo es reemplazar `:80` por el nombre de dominio. Caddy hace todo lo demas automaticamente.

Tambien hay que actualizar el servicio en `docker-compose.yml` para exponer el puerto 443 (HTTPS) y darle un volumen para guardar los certificados:

```yaml
caddy:
  image: caddy:2-alpine
  container_name: app_caddy
  restart: unless-stopped
  ports:
    - "80:80"
    - "443:443"
  volumes:
    - ./caddy/Caddyfile:/etc/caddy/Caddyfile
    - caddy_data:/data
    - caddy_config:/config
```

Y agregar `caddy_config` a la seccion `volumes` del final del archivo:

```yaml
volumes:
  # ...los que ya estan...
  caddy_config:
```

### Que es DDNS (DNS Dinamico)

Para entender DDNS, primero hay que entender el problema que resuelve.

**El problema:** cuando contras un dominio (por ejemplo en Namecheap o Google Domains), tenes que decirle a que direccion IP apunta. Pero la mayoria de las conexiones hogareñas tienen **IP dinamica**: tu proveedor de internet te cambia la IP periodicamente (cada horas o dias). Si tu IP cambia, el dominio deja de apuntar al lugar correcto y tu sitio queda inaccesible.

**La solucion: DNS Dinamico (DDNS).** Es un servicio que actualiza automaticamente la relacion dominio → IP. Funciona asi:

1. Te registras en un servicio DDNS y te dan un subdominio (ejemplo: `miproyecto.duckdns.org`)
2. Instalas un cliente en tu computadora/servidor que cada pocos minutos le avisa al servicio de DDNS cual es tu IP actual
3. Si tu IP cambia, el servicio actualiza el registro DNS automaticamente

```
Tu PC (IP cambia) → Cliente DDNS avisa → Servicio DDNS actualiza → Dominio siempre apunta a tu IP
```

### Servicios DDNS gratuitos

| Servicio                                  | Subdominio que te dan  | Notas                                   |
| ----------------------------------------- | ---------------------- | --------------------------------------- |
| [Duck DNS](https://www.duckdns.org/)      | `tunombre.duckdns.org` | Gratuito, simple, popular               |
| [No-IP](https://www.noip.com/)            | `tunombre.ddns.net`    | Gratuito con renovacion mensual         |
| [Dynu](https://www.dynu.com/)             | `tunombre.dynu.net`    | Gratuito, soporta dominios propios      |
| [Afraid.org](https://freedns.afraid.org/) | Varios disponibles     | Gratuito, muchas opciones de subdominio |

### Ejemplo completo con Duck DNS

**Paso 1:** Crear una cuenta en [duckdns.org](https://www.duckdns.org/) (se puede entrar con Google/GitHub).

**Paso 2:** Crear un subdominio, por ejemplo `miprog3`. Esto te da `miprog3.duckdns.org`.

**Paso 3:** Agregar un servicio DDNS al `docker-compose.yml` para que actualice tu IP automaticamente:

```yaml
duckdns:
  image: lscr.io/linuxserver/duckdns:latest
  container_name: app_duckdns
  restart: unless-stopped
  environment:
    - SUBDOMAINS=miprog3
    - TOKEN=tu-token-de-duckdns
    - UPDATE_IP=ipv4
    - TZ=America/Argentina/Buenos_Aires
```

> El token lo encontras en tu panel de Duck DNS despues de loguearte.

**Paso 4:** Actualizar el `Caddyfile` para usar tu subdominio:

```
miprog3.duckdns.org {
    handle /api/* {
        reverse_proxy backend:3001
    }

    handle /health {
        reverse_proxy backend:3001
    }

    handle {
        reverse_proxy frontend:3000
    }
}
```

**Paso 5:** Abrir los puertos 80 y 443 en tu router (port forwarding) hacia la IP local de tu computadora.

Con esto, cualquier persona puede entrar a `https://miprog3.duckdns.org` desde cualquier lugar y ver tu proyecto corriendo con HTTPS.

### Consideraciones importantes

- **Port forwarding:** Tu router por defecto bloquea conexiones entrantes. Tenes que entrar a la configuracion del router (generalmente `192.168.1.1`) y redirigir los puertos 80 y 443 hacia la IP local de tu maquina.
- **Firewall:** Si usas Linux, asegurate de que `ufw` u otro firewall permita los puertos 80 y 443.
- **Seguridad:** Exponer tu computadora a internet tiene riesgos. Asegurate de cambiar todas las contraseñas por defecto antes de hacerlo (base de datos, pgAdmin, JWT secret).

---

## Opcional: Despliegue en AWS con EC2

### Que es AWS

Amazon Web Services (AWS) es la plataforma de servicios en la nube mas grande del mundo. Ofrece servidores, bases de datos, almacenamiento, redes y cientos de servicios mas que se pagan por uso. En vez de comprar un servidor fisico, alquilas uno virtual que podes crear, configurar y destruir en minutos.

### Que es el Free Tier

AWS tiene un programa llamado **Free Tier** (nivel gratuito) que permite usar varios servicios **sin costo** durante los primeros 12 meses despues de crear la cuenta. El objetivo es que puedas aprender y experimentar sin gastar dinero.

> **Importante:** El Free Tier tiene limites. Si los superas, AWS te cobra automaticamente a la tarjeta de credito que registraste. Siempre controla tu uso en la consola de Billing.

### Que incluye el Free Tier (lo mas relevante para este proyecto)

| Servicio                   | Que te da gratis                                                           | Duracion |
| -------------------------- | -------------------------------------------------------------------------- | -------- |
| **EC2** (servidor virtual) | 750 horas/mes de instancia `t2.micro` o `t3.micro` (1 vCPU, 1 GB RAM)      | 12 meses |
| **RDS** (base de datos)    | 750 horas/mes de instancia `db.t3.micro` con 20 GB de almacenamiento       | 12 meses |
| **S3** (almacenamiento)    | 5 GB de almacenamiento, 20.000 requests GET, 2.000 PUT                     | 12 meses |
| **Elastic IP**             | 1 IP publica gratuita **mientras este asociada a una instancia corriendo** | 12 meses |
| **Data Transfer**          | 100 GB de salida a internet por mes                                        | 12 meses |

> 750 horas/mes = suficiente para tener **1 instancia corriendo 24/7** todo el mes (un mes tiene ~730 horas).

### Que es EC2

EC2 (Elastic Compute Cloud) es el servicio de servidores virtuales de AWS. Cada servidor se llama **instancia**. Una instancia es basicamente una computadora en la nube con Linux (o Windows) donde podes instalar lo que quieras.

La instancia `t2.micro` del Free Tier tiene:

- 1 vCPU
- 1 GB de RAM
- 8 GB de disco (ampliable hasta 30 GB gratis)
- Conexion a internet

Es suficiente para correr este proyecto en modo desarrollo o para un deploy basico.

### Pasos para desplegar este proyecto en EC2

#### 1. Crear una cuenta en AWS

Ir a [aws.amazon.com](https://aws.amazon.com/) y crear una cuenta. Se necesita una tarjeta de credito/debito (se hace un cargo temporal de ~1 USD que se revierte).

#### 2. Lanzar una instancia EC2

1. Entrar a la [consola de EC2](https://console.aws.amazon.com/ec2/)
2. Click en **Launch Instance**
3. Configurar:
   - **Nombre:** `prog3-final` (o el que quieras)
   - **AMI:** Ubuntu Server 24.04 LTS (Free Tier eligible)
   - **Instance type:** `t2.micro` (Free Tier eligible)
   - **Key pair:** Crear un nuevo par de claves, descargar el archivo `.pem` (lo vas a necesitar para conectarte por SSH). **No lo pierdas.**
   - **Network settings:** Habilitar trafico HTTP (puerto 80) y HTTPS (puerto 443). Tambien asegurarse de que SSH (puerto 22) este habilitado.
   - **Storage:** 20 GB gp3 (dentro del Free Tier)
4. Click en **Launch Instance**

#### 3. Conectarse por SSH

```bash
# Dar permisos al archivo de clave
chmod 400 tu-clave.pem

# Conectarse (reemplazar con la IP publica de tu instancia)
ssh -i tu-clave.pem ubuntu@54.XXX.XXX.XXX
```

> La IP publica la encontras en la consola de EC2, en los detalles de tu instancia.

#### 4. Instalar Docker en la instancia

```bash
# Actualizar el sistema
sudo apt update && sudo apt upgrade -y

# Instalar Docker
curl -fsSL https://get.docker.com | sudo sh

# Agregar tu usuario al grupo docker (para no usar sudo)
sudo usermod -aG docker $USER

# Cerrar sesion y volver a entrar para que tome efecto
exit
# Volver a conectarse con ssh...

# Verificar que Docker funciona
docker --version
docker compose version
```

#### 5. Clonar el proyecto y levantarlo

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/tu-repo.git
cd tu-repo

# Levantar los servicios
docker compose up -d

# Verificar que todo esta corriendo
docker compose ps
```

En este punto, tu proyecto esta accesible en `http://IP-PUBLICA-DE-TU-INSTANCIA`.

#### 6. (Opcional) Asociar un dominio

Si tenes un dominio o un DDNS, podes apuntarlo a la IP publica de tu instancia EC2 y configurar Caddy con HTTPS como se explico en la seccion anterior.

> **Nota sobre Elastic IP:** La IP publica de una instancia EC2 cambia cada vez que la detenes y la volves a iniciar. Para tener una IP fija, podes asignar una **Elastic IP** (gratuita mientras la instancia este corriendo). Se hace desde la consola de EC2 → Elastic IPs → Allocate → Associate.

### Consideraciones sobre costos

- **No dejes instancias corriendo si no las usas.** Si bien el Free Tier da 750 horas/mes, si lanzas 2 instancias, cada una consume horas por separado (2 instancias × 375 horas = 750 horas en medio mes).
- **Elastic IP sin instancia = costo.** Si reservas una Elastic IP y no la asocias a una instancia corriendo, AWS te cobra ~$3.65/mes.
- **Configura alertas de Billing.** En la consola de AWS → Billing → Budgets, podes crear una alerta que te avise si tu gasto supera cierto monto (por ejemplo, $1 USD).
- **Cuando termines el cuatrimestre**, elimina la instancia y libera la Elastic IP para no tener cargos inesperados.

### Alternativas gratuitas a AWS

Si AWS te parece complejo o no queres poner una tarjeta de credito, hay alternativas con planes gratuitos mas simples:

| Plataforma                                         | Plan gratuito                                                        | Ideal para                               |
| -------------------------------------------------- | -------------------------------------------------------------------- | ---------------------------------------- |
| [Railway](https://railway.app/)                    | $5 USD de credito/mes                                                | Deploy rapido con Docker                 |
| [Render](https://render.com/)                      | Servicios web gratuitos (se apagan por inactividad)                  | Proyectos simples                        |
| [Fly.io](https://fly.io/)                          | 3 VMs compartidas gratuitas                                          | Contenedores Docker                      |
| [Oracle Cloud](https://www.oracle.com/cloud/free/) | 2 instancias ARM gratuitas **para siempre** (4 CPU, 24 GB RAM total) | Alternativa a EC2 sin limite de 12 meses |
