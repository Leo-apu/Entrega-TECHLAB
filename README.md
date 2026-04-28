
# 🚀 Proyecto Pre-Entrega: Gestión de Tienda TechLab

Este proyecto es una herramienta de interfaz de línea de comandos (CLI) desarrollada en **Node.js** para la gestión de productos de una tienda en línea. Utiliza la arquitectura de comunicación **REST** para interactuar con la API de [FakeStore](https://fakestoreapi.com/).

**Curso:** Back-end / Node.js  
**Institución:** Talento Tech - Agencia de Habilidades para el Futuro  
**Estudiante:** Leandro Victorino Cruz

---

## 📋 Descripción del Proyecto

La aplicación permite realizar operaciones CRUD (Crear, Leer y Eliminar) sobre un catálogo de productos directamente desde la terminal. Se ha priorizado la separación de responsabilidades, el uso de código limpio (Clean Code) y la robustez ante errores de red o recursos inexistentes.

Se implementa una arquitectura modular separando:

- Lógica de negocio (app.js)
- Comunicación con API (product.service.js)
- Punto de entrada (index.js)

Además, el sistema está diseñado para ser testeado automáticamente mediante herramientas de testing.

### Requerimientos cumplidos:
- [x] **Configuración Inicial:** Uso de `package.json`, ESModules y scripts personalizados.
- [x] **Gestión Dinámica:** Interpretación de comandos mediante `process.argv`.
- [x] **Comunicación Asíncrona:** Implementación de `fetch` para peticiones HTTP.
- [x] **Manipulación de Datos:** Uso de destructuring, spread operator y métodos de arrays/strings.

---


## ✅ Funcionalidades

 - Listar todos los productos (GET products)
 - Obtener un producto por ID (GET products/:id)
 - Crear un producto (POST products)
 - Actualizar un producto (PUT products/:id) 
 - Eliminar un producto (DELETE products/:id)
 - Testing automatizado con Mocha y Chai


## 🛠️ Estructura del Proyecto

```text
techlab-store/
├── src/
│   ├── services/
│   │   └── product.service.js  # Lógica de comunicación con la API (Fetch)
│   ├── test/
│   │   └── pre-entrega-test.js    # Definición de la estructura de un producto
│   └── app.js                  # Comandos y lógica de negocio
├── index.js                    # Punto de entrada de la aplicación
├── README.md                   # Descripción del proyecto
├── package-lock.json           # Configuración y dependencias
└── package.json                # Configuración y dependencias

```

## 🚀 Instalación y Uso
1. Clonar o descargar el proyecto
Asegúrate de tener instalado Node.js (versión 18 o superior).

2. Inicializar el proyecto
Desde la terminal en la carpeta raíz, ejecuta:

```` Bash
npm init -y
````
Instalar dependencias y configurar el proyecto.

```` Bash
npm install
````

3. Ejecución de comandos
La aplicación utiliza el script start configurado en el package.json. El formato general es: npm run star seguido del metodo y el recurso.

```` Bash
npm run start <MÉTODO> <RECURSO> [PARÁMETROS]
````

Listar todos los productos disponibles en la tienda:

``` Bash
npm run start GET products
```

Consultar un producto específico (ej. ID 15):

``` Bash
npm run start GET products/15
```

Crear un nuevo producto enviando los datos , title, price, category:

``` Bash
npm run start POST products "Remera-node " 150000 "ropa"
```

Actualizar un producto:

``` Bash
npm run start PUT products/7 "Remera azul" 34.5 "women's clothing"
```

Eliminar un producto:

``` Bash
npm run start DELETE products/7
``` 

## 🧪 Testing

El proyecto cuenta con un conjunto de pruebas automatizadas utilizando Mocha y Chai. Las pruebas se encuentran en el archivo `pre-entrega-test.js` y se ejecutan utilizando el comando `npm run test`.

Las pruebas verifican la funcionalidad de la aplicación, incluyendo la comunicación con la API, la manipulación de datos y la validación de comandos.

Los tests verifican:

- Respuesta correcta en GET (lista y detalle)
- Creación de productos
- Eliminación de productos
- Formato exacto de salida en consola

## ⚙️ Detalles de Implementación
### Comunicación con la API
Se utiliza la biblioteca fetch para realizar solicitudes HTTP a la API.
- Métodos HTTP utilizados: GET, POST, PUT y DELETE.
- Validación de errores en la respuesta de la API.
- Manejo de errores en la comunicación con la API.

### Manejo de argumentos CLI
Se utiliza la biblioteca `process.argv` para capturar los argumentos de la terminal.

### Formato de Salida
El formato de salida en la consola se basa en la estructura de un producto definida en `pre-entrega-test.js`.

### Manejo de Errores
Se implementó una validación en product.service.js que verifica el estado de la respuesta ***(response.ok)***. Esto evita fallos críticos cuando se intenta consultar IDs que no existen físicamente en la base de datos de la API.

### Interfaz Limpia
Para facilitar la lectura en la terminal, los títulos largos de los productos se recortan automáticamente y la información se presenta mediante ***console.table()*** con campos seleccionados, garantizando una salida profesional y organizada.

### Codificación Limpia
El proyecto utiliza ES Modules y se ha aplicado el estilo Clean Code para mejorar la legibilidad y mantenibilidad del código.


## ⚠️ Consideraciones
- La API FakeStore es simulada, por lo que algunos cambios (PUT/DELETE) no persisten realmente.
- Los datos retornados pueden variar dependiendo de la API.
- El formato de salida está optimizado para testing automático.

## 📚 Tecnologías Utilizadas
- Node.js
- JavaScript (ESModules)
- Fetch API
- Mocha
- Chai