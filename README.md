# Sintonía

Aplicación web para explorar álbumes, géneros y artistas. Permite consultar la
información de un álbum y su lista de pistas, además de iniciar sesión mediante
la API del proyecto.

## Requisitos

- Node.js `^20.19.0` o `>=22.12.0`.
- npm.
- Acceso a la API de Sintonía.

## Configuración

1. Instala las dependencias:

   ```bash
   npm install
   ```

2. Crea un archivo `.env` en la raíz y configura la URL base de la API:

   ```env
   VITE_API_BASE_URL=https://<servidor-api>/api/v1
   ```

   La variable debe apuntar al prefijo `/api/v1`. No guardes credenciales ni
   secretos en variables `VITE_*`: Vite las incluye en el código del navegador.

3. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

   Vite mostrará la dirección local en la terminal.

## Comandos

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Compilación de producción en dist/
npm run preview  # Vista previa de la compilación
```

El proyecto todavía no tiene un ejecutor de pruebas configurado; `npm test` es
un marcador de posición.

## Rutas principales

| Ruta | Descripción |
| --- | --- |
| `/` | Inicio con álbumes destacados y géneros |
| `/catalogo` | Catálogo de álbumes y filtros por género |
| `/albumes/:id` | Detalle del álbum y lista de pistas |
| `/ingresar` | Formulario de inicio de sesión |

El formulario de ingreso muestra enlaces a `/crear-cuenta` y
`/recuperar-clave`, pero esas páginas todavía no están registradas en el
enrutador.

## API utilizada

Las rutas se concatenan con `VITE_API_BASE_URL`.

| Método | Endpoint | Uso |
| --- | --- | --- |
| `GET` | `/textos?idioma=es` | Textos de la interfaz |
| `GET` | `/albumes?orden=populares&limite=6` | Álbumes destacados |
| `GET` | `/albumes/:id` | Detalle, género y pistas del álbum |
| `GET` | `/generos` | Lista de géneros |
| `GET` | `/generos/:id` | Detalle del género |
| `GET` | `/sesion` | Restaurar la sesión actual |
| `POST` | `/sesion` | Iniciar sesión con los campos `correo` y `clave` |
| `DELETE` | `/sesion` | Cerrar sesión |
| `POST` | `/recuperacion` | Solicitar recuperación de contraseña |
| `POST` | `/recuperacion/nueva-clave` | Establecer una nueva contraseña |

Las solicitudes de sesión usan cookies (`credentials: include`). Para que la
sesión sobreviva a una recarga, la API debe establecer la cookie correctamente
y permitir solicitudes con credenciales desde el origen de esta aplicación.

## Estructura del código

- `src/pages/`: páginas de Inicio, Catálogo, detalle de álbum e ingreso.
- `src/components/`: secciones y componentes reutilizables de la interfaz.
- `src/hooks/`: carga de álbumes, géneros y textos.
- `src/context/`: estado global de autenticación.
- `src/services/`: comunicación con la API y utilidades de cookies.
- `src/styles/`: tokens de diseño y estilos globales.
