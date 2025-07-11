# Interacción Avanzada con el DOM y Persistencia de Datos

Este proyecto es una aplicación web desarrollada en HTML, CSS y JavaScript que permite capturar, almacenar y mostrar información del usuario mediante formularios. Se enfoca en la manipulación dinámica del DOM y el uso de localStorage y sessionStorage para persistencia de datos en el navegador.

---

## Objetivos

- Manipular elementos del DOM para modificar dinámicamente el contenido de la página.
- Capturar datos ingresados por el usuario mediante formularios.
- Almacenar datos de forma persistente utilizando localStorage.
- Contabilizar las interacciones del usuario con la interfaz usando sessionStorage.
- Mostrar y actualizar datos de manera visual y desde la consola del navegador.
- Aplicar buenas prácticas de programación con const, let, validaciones y comentarios.

## Estructura del proyecto
```
📁 proyecto-manipulacion-dom/
├── form.html         # Interfaz del formulario
├── style.css         # Estilos visuales
└── app.js            # Lógica en JavaScript
```


## Tecnologías usadas
- **HTML5** y **CSS3**: Estructura y diseño de la interfaz.
- **JavaScript** (ES6): Lógica para consumir la API y gestionar productos.
- **JavaScript (ES6)**: Lógica de interacción, almacenamiento y manipulación del DOM.
- **Web Storage API**: Uso de localStorage y sessionStorage.
---

## Requisitos

- Navegador moderno (Chrome, Firefox, Edge).
- Editor de código (Visual Studio Code, Atom, etc.).
- Herramientas del desarrollador (Consola y pestaña Application para visualizar los datos almacenados).

---

## Uso del programa
1. Abre form.html en un navegador.
2. Ingresa tu nombre y edad en el formulario.
3. Haz clic en "Guardar datos" para almacenarlos en localStorage.
4. El mensaje personalizado se mostrará en la página y los datos quedarán guardados.
5. Cada vez que hagas clic en "Guardar datos" o "Limpiar datos", aumentará el contador de interacciones (sessionStorage).
6. Haz clic en "Limpiar datos" para borrar el contenido de localStorage (los datos se eliminan pero el contador de sesión se mantiene hasta cerrar la pestaña).
7. Abre la consola del navegador (F12) para ver los mensajes registrados con cada interacción

## Instalacion

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/RiveraMg/manipulacion_dom.git
   cd manipulacion_dom