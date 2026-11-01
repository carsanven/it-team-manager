# IT Team Manager

**Panel de gestión y seguimiento de incidencias de un equipo de soporte informático.**

IT Team Manager es una aplicación web desarrollada como parte de un reto práctico de desarrollo y gestión de proyectos con asistencia de inteligencia artificial. Permite consultar, buscar y filtrar incidencias de soporte utilizando datos de ejemplo.

La aplicación está diseñada como una solución ligera, sin necesidad de configurar un servidor backend ni una base de datos.

## 📋 Características

- **Listado de incidencias:** visualización de las incidencias registradas.
- **Búsqueda:** localización de incidencias mediante los criterios disponibles en la interfaz.
- **Filtros:** consulta de incidencias según las opciones implementadas en la aplicación.
- **Exportación:** posibilidad de exportar información desde la interfaz.
- **Datos de ejemplo:** conjunto de nueve incidencias ficticias para demostrar el funcionamiento.
- **Diseño web:** interfaz desarrollada con HTML, CSS y JavaScript.
- **Despliegue en la nube:** aplicación publicada mediante Vercel.
- **Seguridad básica:** cabeceras HTTP de seguridad configuradas en el despliegue.

> **Importante:** los datos incluidos son ficticios. El proyecto tiene una finalidad demostrativa y no debe utilizarse como sistema de gestión de incidencias en producción sin las adaptaciones necesarias.

## 🛠️ Tecnologías utilizadas

| Tecnología                     | Función                                       |
| ------------------------------ | --------------------------------------------- |
| HTML5                          | Estructura de la aplicación                   |
| CSS3                           | Estilos y presentación visual                 |
| JavaScript                     | Lógica e interactividad                       |
| JSON                           | Almacenamiento de las incidencias de ejemplo  |
| Git y GitHub                   | Control de versiones y publicación del código |
| Visual Studio Code Live Server | Servidor de desarrollo local                  |
| Vercel                         | Despliegue de la aplicación web               |

## 📁 Estructura del proyecto

```text
IT-Team-Manager/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── app.js
├── data/
│   └── incidencias.json
├── capturas/
│   ├── 6-mantenimiento1.jpg
│   └── 6-mantenimiento2.jpg
├── vercel.json
├── .gitignore
├── .vercelignore
└── README.md
```

**Descripción de los componentes:**

- `index.html`: estructura principal de la aplicación.
- `css/styles.css`: estilos visuales.
- `js/app.js`: lógica de la aplicación, búsqueda, filtros y operaciones disponibles.
- `data/incidencias.json`: datos de ejemplo utilizados por la aplicación.
- `capturas/`: evidencias gráficas y documentación visual del proyecto.
- `vercel.json`: configuración del despliegue y de las cabeceras HTTP.
- `.gitignore`: archivos y directorios excluidos del control de versiones.
- `.vercelignore`: archivos y directorios excluidos del despliegue en Vercel.
- `README.md`: documentación principal del repositorio.

## 🚀 Ejecución en local

La aplicación no necesita instalar dependencias de Node.js ni configurar una base de datos.

### Requisitos

- Visual Studio Code.
- Extensión **Live Server** instalada en Visual Studio Code.
- Navegador web actualizado.

### Pasos para ejecutar la aplicación

1. Abre la carpeta del proyecto en Visual Studio Code.
2. Abre el archivo `index.html`.
3. Haz clic con el botón derecho sobre el archivo.
4. Selecciona **Open with Live Server**.
5. Se abrirá el navegador con la aplicación.

**URL local de acceso:**

http://127.0.0.1:5500/

Live Server proporciona el servidor HTTP local y permite que el navegador cargue los archivos HTML, CSS, JavaScript y JSON de la aplicación.

Para detener el servidor, utiliza la opción de detener Live Server en Visual Studio Code.

> El puerto `5500` corresponde a la configuración actual de Live Server. Si se modifica su configuración, la dirección local podría cambiar.

## ☁️ Despliegue en Vercel

La aplicación está publicada en Vercel.

**URL de producción:**

https://prompt-carbon-jty7gqo-it-team-manager.vercel.app

Para desplegar una copia propia:

1. Crea una cuenta en Vercel, si todavía no dispones de una.
2. Publica el código del proyecto en un repositorio de GitHub.
3. Accede a Vercel e importa el repositorio.
4. Configura el proyecto como una aplicación web estática.
5. Si no se utiliza un proceso de compilación, deja vacío el comando de construcción.
6. Comprueba que el directorio de publicación contiene `index.html` y el resto de los archivos necesarios.
7. Ejecuta el despliegue.
8. Abre la URL generada y verifica que la aplicación funciona correctamente.

La configuración concreta de construcción y publicación debe respetar la estructura real del repositorio.

### Cabeceras de seguridad

El archivo `vercel.json` configura cabeceras HTTP destinadas a mejorar la seguridad del sitio, entre ellas:

- `Content-Security-Policy`
- `X-Content-Type-Options`
- `Referrer-Policy`
- `X-Frame-Options`

Vercel también puede añadir otras cabeceras a la respuesta según la configuración del despliegue.

La presencia de estas cabeceras es una medida de protección, pero no constituye por sí sola una auditoría completa de seguridad.

## 🔄 Reproducir el proyecto desde GitHub

Este procedimiento permite que otra persona compruebe si puede obtener el código y ejecutar la aplicación de forma independiente.

### 1. Clonar el repositorio

Una vez que el repositorio sea público, otra persona puede clonarlo desde su propio equipo:

```bash
git clone https://github.com/USUARIO/IT-Team-Manager.git
```

Sustituye `USUARIO` por el nombre real de la cuenta de GitHub propietaria del repositorio.

### 2. Acceder al directorio

```bash
cd IT-Team-Manager
```

### 3. Abrir el proyecto

1. Abre la carpeta clonada en Visual Studio Code.
2. Comprueba que la extensión Live Server está instalada.
3. Abre `index.html`.
4. Selecciona **Open with Live Server**.

El navegador abrirá la aplicación en una dirección local similar a:

http://127.0.0.1:5500/

El puerto puede variar si ya está ocupado o si Live Server tiene otra configuración.

### 4. Validar el funcionamiento

Comprueba, como mínimo, los siguientes puntos:

- La página principal carga correctamente.
- Las nueve incidencias de ejemplo aparecen en la interfaz.
- La búsqueda devuelve los resultados esperados.
- Los filtros disponibles funcionan.
- La exportación genera el resultado previsto.
- No aparecen errores que impidan utilizar la aplicación.

### 5. Documentar el resultado

La persona que realice la prueba puede registrar:

- Sistema operativo y navegador utilizados.
- Resultado de la clonación.
- Resultado de la ejecución local.
- Funcionalidades comprobadas.
- Errores encontrados, si los hubiera.
- Capturas de pantalla que permitan verificar la prueba.

La prueba debe realizarse de forma independiente para demostrar que el proyecto puede reproducirse a partir del repositorio.

## 🔐 Seguridad y publicación del código

Antes de publicar el repositorio:

- Revisa los archivos que se van a incluir.
- No publiques contraseñas, credenciales, tokens ni otros datos confidenciales.
- Mantén los archivos locales de configuración y las credenciales fuera del control de versiones.
- Comprueba que los datos de ejemplo no contienen información personal real.
- Revisa que las capturas de pantalla no expongan información privada.
- Verifica que el repositorio no incluya archivos locales innecesarios.

Los archivos `.gitignore` y `.vercelignore` tienen finalidades diferentes: el primero controla qué archivos se excluyen del repositorio Git y el segundo qué archivos se excluyen del despliegue en Vercel.

Las capturas que deban formar parte de la documentación pública tienen que estar incluidas expresamente en el repositorio.

## 📸 Evidencias y mantenimiento

El directorio `capturas/` contiene evidencias visuales relacionadas con la documentación y el mantenimiento del proyecto.

Estas evidencias complementan la documentación técnica y permiten consultar el estado de la aplicación y los trabajos realizados.

## ⚠️ Limitaciones conocidas

- La aplicación utiliza datos de ejemplo.
- No dispone de backend ni de base de datos.
- No implementa autenticación de usuarios.
- No debe utilizarse para almacenar incidencias reales que contengan información confidencial.
- Las funcionalidades disponibles dependen de la implementación actual del código.

## 🎯 Objetivo del proyecto

Demostrar la capacidad de desarrollar, documentar, publicar y mantener una aplicación web sencilla con ayuda de herramientas de inteligencia artificial.

El proyecto también permite practicar la revisión de seguridad, la documentación técnica, el despliegue en la nube y la reproducción independiente del entorno.

## 📄 Licencia

No se ha especificado una licencia para este proyecto. Consulta al propietario del repositorio antes de reutilizar o redistribuir el código.
