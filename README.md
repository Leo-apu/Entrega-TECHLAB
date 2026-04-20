
# 🚀 Proyecto Pre-Entrega: Gestión de Tienda TechLab

Este proyecto es una herramienta de interfaz de línea de comandos (CLI) desarrollada en **Node.js** para la gestión de productos de una tienda en línea. Utiliza la arquitectura de comunicación **REST** para interactuar con la API de [FakeStore](https://fakestoreapi.com/).

**Curso:** Back-end / Node.js  
**Institución:** Talento Tech - Agencia de Habilidades para el Futuro  
**Estudiante:** Leandro Victorino Cruz

---

## 📋 Descripción del Proyecto

La aplicación permite realizar operaciones CRUD (Crear, Leer y Eliminar) sobre un catálogo de productos directamente desde la terminal. Se ha priorizado la separación de responsabilidades, el uso de código limpio (Clean Code) y la robustez ante errores de red o recursos inexistentes.

### Requerimientos cumplidos:
- [x] **Configuración Inicial:** Uso de `package.json`, ESModules y scripts personalizados.
- [x] **Gestión Dinámica:** Interpretación de comandos mediante `process.argv`.
- [x] **Comunicación Asíncrona:** Implementación de `fetch` para peticiones HTTP.
- [x] **Manipulación de Datos:** Uso de destructuring, spread operator y métodos de arrays/strings.

---

## 🛠️ Estructura del Proyecto

```text
techlab-store/
├── src/
│   ├── services/
│   │   └── product.service.js  # Lógica de comunicación con la API (Fetch)
│   └── app.js                  # Comandos y lógica de negocio
├── index.js                    # Punto de entrada de la aplicación
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

Eliminar un producto:

``` Bash
npm run start DELETE products/7
``` 


## Detalles de Implementación
### Manejo de Errores
Se implementó una validación en product.service.js que verifica el estado de la respuesta ***(response.ok)***. Esto evita fallos críticos cuando se intenta consultar IDs que no existen físicamente en la base de datos de la API.

### Interfaz Limpia
Para facilitar la lectura en la terminal, los títulos largos de los productos se recortan automáticamente y la información se presenta mediante ***console.table()*** con campos seleccionados, garantizando una salida profesional y organizada.
