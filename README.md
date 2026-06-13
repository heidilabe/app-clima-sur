# Portal del Clima Sur - Puerto Montt y Sur de Chile

Este proyecto es una aplicación web responsiva y profesional sobre el clima de Puerto Montt y otras ciudades del sur de Chile, utilizando prácticas de diseño avanzadas (Glassmorphism), accesibilidad y una robusta interactividad en el front-end.

---

## Estructura del Proyecto Actualizada

La estructura de archivos de la aplicación es la siguiente:

```text
app-clima-sur/
├── css/
│   └── style.css            # Estilos principales de la aplicación (Glassmorphism, variables, animaciones, favoritos y autocompletado)
├── images/
│   ├── puerto_montt_weather.png # Imagen de Puerto Montt generada por IA
│   ├── castro_weather.png   # Imagen de Castro generada por IA
│   └── rainy_icon.png       # Icono del clima lluvioso/nublado estilo glassmorphic generado por IA
├── js/
│   └── main.js              # Lógica principal, sistema de favoritos, autocompletado y renderizado dinámico
├── index.html               # Estructura HTML5 semántica y SEO del portal
└── README.md                # Documentación del proyecto (este archivo)
```

---

## Características de la Implementación JavaScript (`/js/main.js`)

Se ha estructurado la lógica de la aplicación en la carpeta `/js` para cumplir con las mejores prácticas y los requerimientos del desarrollo moderno:
- **Declaraciones correctas con `const` y `let`:** Se utilizan constantes (`const`) para elementos inmutables como referencias del DOM, la base de datos de clima, y `let` para la gestión de estados cambiantes (como la ciudad activa y la lista de favoritos).
- **Estructuras de Datos Complejas:**
  - **Arreglos:** El sistema utiliza arreglos dinámicos para almacenar la lista de favoritos (`favoriteCities`), así como para los arreglos de pronósticos semanales de cada ciudad.
  - **Objetos:** Toda la información del clima simulado se estructura en el objeto de base de datos `weatherDatabase`.
- **Funciones Propias:** Implementación de funciones modulares como `normalizeText`, `showWeather`, `renderWeeklyForecast`, `renderFavorites`, `addFavorite` y `removeFavorite`.
- **Funciones Flecha (Arrow Functions):** Utilizadas ampliamente para simplificar la sintaxis y manejar callbacks, tales como iteraciones (`forEach`), filtrado de datos (`filter`) y controladores de eventos.
- **Acceso al DOM mediante `querySelector`:** Reemplazo de los métodos tradicionales por selectores flexibles en la carga inicial y el enlazado de eventos.
- **Manejo de Eventos (`addEventListener`):** Registro de eventos interactivos para la búsqueda dinámica (`input`), envío de formularios (`submit`), clicks en botones y selección de favoritos (`click`).

---

## Validaciones y Correcciones Realizadas Durante el Desarrollo

Durante el proceso de desarrollo y pruebas, se realizaron las siguientes validaciones y mejoras:
1. **Búsqueda Dinámica (Autocompletado en Tiempo Real):** Se validó que al escribir en el campo de búsqueda se muestren sugerencias inmediatas basadas en las ciudades disponibles en la base de datos local. Al hacer click en una sugerencia, se carga directamente el clima de dicha ciudad y se limpia el menú de sugerencias.
2. **Sistema de Favoritos Resiliente y Persistente:** Se diseñó un sistema de favoritos que utiliza `localStorage` para guardar las ciudades preferidas del usuario de forma persistente.
   - Si no hay favoritos guardados, el DOM renderiza dinámicamente un mensaje indicando que no hay ciudades guardadas.
   - Al agregar una ciudad favorita, el botón "⭐ Guardar" se transforma a "⭐ Guardado" en tiempo real y la ciudad aparece en la lista de favoritos.
   - Cada tarjeta favorita cuenta con un botón para eliminar la ciudad directamente de favoritos.
3. **Control de Errores e Interactividad:** Si el usuario ingresa una ciudad que no existe en el buscador tradicional, se muestra de manera fluida un contenedor de error (`#search-error`) que le indica las ciudades válidas disponibles.
4. **Efectos Visuales Premium y Transición de Estados:** Se implementó una animación de transición tipo *fade-in* en el contenedor del clima actual y en las tarjetas del pronóstico semanal para mejorar la fluidez al cambiar entre ciudades.

---

## Prompts de Generación de Imágenes (IA)

Para el diseño visual premium y los recursos gráficos del clima actual, utilizamos los siguientes 4 prompts detallados:

1. **Imagen del Clima de Puerto Montt:**
   > *"A beautiful landscape view of Puerto Montt, Chile, showcasing the waterfront, the bay with boats, and characteristic cloudy, rainy weather with mist over the water and hills in the background, realistic style"*
   
2. **Icono del Clima Lluvioso/Nublado:**
   > *"A flat modern glassmorphism weather icon representing cloudy and rainy weather, with a soft gradient background, vector style, isolated"*
   
3. **Imagen del Clima de Castro (Chiloé):**
   > *"A beautiful landscape view of Castro, Chiloé, Chile, showcasing the traditional colorful wooden stilt houses (palafitos) on the water under a cloudy, misty sky, realistic photography style"*
   
4. **Imagen del Clima de Valdivia:**
   > *"A beautiful landscape view of Valdivia, Chile, showcasing the Calle-Calle river, boats, green riverside forests under a misty, cloudy rain, realistic photography style"*

---

## Registro de Prompts de IA Utilizados Durante el Desarrollo

* **Prompt 1 (Diseño Visual):** *"Modifica el diseño del contenedor para aplicar un estilo Glassmorphism premium, con bordes finos semi-transparentes, fondo oscuro difuminado y fuentes modernas de Google Fonts."*
* **Prompt 2 (Interactividad del Buscador):** *"Crea un script en app.js que capture el texto del formulario de búsqueda y cambie dinámicamente el título y los datos de clima en la pantalla según la ciudad ingresada, mostrando alertas si no se encuentra."*
* **Prompt 3 (Datos Locales de Puerto Montt):** *"Abre el archivo app.js y agrega 'Puerto Montt' a la base de datos local de ciudades, con sus respectivos datos de clima (temperatura, condición, humedad, viento) para que cuando la busque en el formulario no me tire error."*
* **Prompt 4 (Pronóstico Semanal de 7 días):** *"Modifica el archivo app.js e index.html para que la sección de 'Pronóstico Semanal' muestre dinámicamente los datos de toda la semana para Puerto Montt (Lunes a Domingo con sus temperaturas y estados del cielo) usando un diseño de tarjetas."*
