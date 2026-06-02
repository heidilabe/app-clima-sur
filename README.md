# Portal del Clima Sur - Puerto Montt

Este proyecto es una aplicación web estática responsiva y profesional sobre el clima de Puerto Montt y otras ciudades del sur de Chile, utilizando prácticas de diseño avanzadas (Glassmorphism) e interactividad en el front-end.

## Estructura del Proyecto

La estructura de archivos de la aplicación es la siguiente:

```text
app-clima-sur/
├── css/
│   └── style.css            # Estilos principales de la aplicación (Glassmorphism, variables, animaciones)
├── images/
│   ├── puerto_montt_weather.png # Imagen de Puerto Montt generada por IA
│   ├── castro_weather.png   # Imagen de Castro generada por IA
│   └── rainy_icon.png       # Icono del clima lluvioso/nublado estilo glassmorphic generado por IA
├── index.html               # Estructura HTML5 semántica y SEO del portal
├── app.js                   # Lógica e interactividad de búsqueda y carga de datos climáticos
└── README.md                # Documentación del proyecto (este archivo)
```

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
   > Registro de Prompts Utilizados Durante el Desarrollo (Interacción con la IA)

Durante el desarrollo de este proyecto, se utilizaron instrucciones (prompts) claras y dirigidas para guiar a la Inteligencia Artificial en la construcción del software, las cuales se detallan a continuación:

* **Prompt 1 (Diseño Visual):** *"Modifica el diseño del contenedor para aplicar un estilo Glassmorphism premium, con bordes finos semi-transparentes, fondo oscuro difuminado y fuentes modernas de Google Fonts."*
    * **Para qué se usó:** Para estructurar toda la parte visual, los colores y la estética de cristal translúcido en el archivo `css/style.css`.
* **Prompt 2 (Interactividad del Buscador):** *"Crea un script en app.js que capture el texto del formulario de búsqueda y cambie dinámicamente el título y los datos de clima en la pantalla según la ciudad ingresada, mostrando alertas si no se encuentra."*
    * **Para qué se usó:** Para programar la lógica del buscador en JavaScript, permitiendo que la página reaccione cuando el usuario escribe una comuna.
* **Prompt 3 (Datos Locales de Puerto Montt):** *"Abre el archivo app.js y agrega 'Puerto Montt' a la base de datos local de ciudades, con sus respectivos datos de clima (temperatura, condición, humedad, viento) para que cuando la busque en el formulario no me tire error."*
    * **Para qué se usó:** Para alimentar el sistema con los datos meteorológicos reales de nuestra zona y asegurar que la ciudad principal funcionara perfectamente.
* **Prompt 4 (Pronóstico Semanal de 7 días):** *"Modifica el archivo app.js e index.html para que la sección de 'Pronóstico Semanal' muestre dinámicamente los datos de toda la semana para Puerto Montt (Lunes a Domingo con sus temperaturas y estados del cielo) usando un diseño de tarjetas."*
    * **Para qué se usó:** Para construir la sección inferior exigida por la rúbrica, generando la maquetación de los 7 días de la semana con Flexbox.

## Características Principales
- **HTML5 Semántico:** Uso de etiquetas estructuradas como `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<figure>` y `<footer>` cumpliendo con la rúbrica del proyecto.
- **Ajustes SEO:** Inclusión de etiquetas meta descriptivas, título SEO optimizado, estructura jerárquica de encabezados y un único `<h1>`.
- **Efectos Visuales Premium:** Tema moderno con Glassmorphism, degradados profundos y orbes animados flotantes en el fondo.
- **Buscador Interactivo y Pronóstico Semanal:** Consulta de ciudades del sur (Puerto Montt, Puerto Varas, Castro, Valdivia, Osorno y Punta Arenas) con actualización dinámica de datos del clima y pronóstico de 7 días (Lunes a Domingo) sin recargar la página.
