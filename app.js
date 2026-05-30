/**
 * Portal del Clima Sur - Lógica e Interactividad Front-End
 * Permite buscar ciudades del sur de Chile y actualizar el clima de forma dinámica
 */

// Base de datos de simulación para las ciudades del sur de Chile
const weatherDatabase = {
    "puerto montt": {
        name: "Puerto Montt",
        condition: "Lluvia Débil / Nublado",
        temp: "11°C",
        feelsLike: "9°C",
        humidity: "92%",
        wind: "Oeste a 18 km/h",
        icon: "images/rainy_icon.png",
        landscape: "images/puerto_montt_weather.png",
        caption: "Bahía de Puerto Montt en un día típico de lluvia"
    },
    "puerto varas": {
        name: "Puerto Varas",
        condition: "Lluvia Ligera y Neblina",
        temp: "10°C",
        feelsLike: "8°C",
        humidity: "95%",
        wind: "Sur-Oeste a 12 km/h",
        icon: "images/rainy_icon.png",
        landscape: "images/puerto_montt_weather.png",
        caption: "Lago Llanquihue con vistas místicas bajo la lluvia de la cuenca"
    },
    "castro": {
        name: "Castro",
        condition: "Chubascos Fuertes",
        temp: "9°C",
        feelsLike: "6°C",
        humidity: "94%",
        wind: "Noroeste a 25 km/h",
        icon: "images/rainy_icon.png",
        landscape: "images/castro_weather.png",
        caption: "Palafitos de Castro bajo la lluvia intensa de Chiloé"
    },
    "valdivia": {
        name: "Valdivia",
        condition: "Lluvia Persistente",
        temp: "10°C",
        feelsLike: "7°C",
        humidity: "96%",
        wind: "Oeste a 15 km/h",
        icon: "images/rainy_icon.png",
        landscape: "images/puerto_montt_weather.png",
        caption: "El río Calle-Calle fluyendo bajo un manto lluvioso sureño"
    },
    "osorno": {
        name: "Osorno",
        condition: "Nublado y Llovizna",
        temp: "10°C",
        feelsLike: "8°C",
        humidity: "90%",
        wind: "Oeste-Noroeste a 14 km/h",
        icon: "images/rainy_icon.png",
        landscape: "images/puerto_montt_weather.png",
        caption: "Día nublado típico en los verdes campos de la provincia de Osorno"
    },
    "punta arenas": {
        name: "Punta Arenas",
        condition: "Escarcha y Viento Fuerte",
        temp: "2°C",
        feelsLike: "-4°C",
        humidity: "82%",
        wind: "Oeste a 45 km/h",
        icon: "images/rainy_icon.png",
        landscape: "images/puerto_montt_weather.png",
        caption: "El Estrecho de Magallanes azotado por vientos australes extremos"
    }
};

// Función auxiliar para normalizar cadenas de texto (quitar acentos y espacios adicionales)
function normalizeText(text) {
    return text
        .trim()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

// Escuchar evento DOMContentLoaded para inicializar la lógica
document.addEventListener("DOMContentLoaded", () => {
    const searchForm = document.getElementById("weather-search-form");
    const cityInput = document.getElementById("city-search-input");
    const errorContainer = document.getElementById("search-error");
    
    // Contenedores del Clima
    const weatherContainer = document.getElementById("weather-container");
    const weatherHeading = document.getElementById("weather-heading");
    const conditionText = document.getElementById("weather-condition");
    const tempText = document.getElementById("weather-temp");
    const feelsLikeText = document.getElementById("weather-feels-like");
    const humidityText = document.getElementById("weather-humidity");
    const windText = document.getElementById("weather-wind");
    const updateTimeText = document.getElementById("weather-update-time");
    
    // Imágenes
    const iconImg = document.getElementById("weather-icon-img");
    const iconCaption = document.getElementById("weather-icon-caption");
    const landscapeImg = document.getElementById("weather-landscape-img");
    const landscapeCaption = document.getElementById("weather-landscape-caption");

    // Manejar el envío del formulario de búsqueda
    searchForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Evitar recargar la página
        
        const searchQuery = cityInput.value;
        const normalizedQuery = normalizeText(searchQuery);

        if (weatherDatabase[normalizedQuery]) {
            // Ciudad encontrada
            const data = weatherDatabase[normalizedQuery];
            
            // Ocultar mensaje de error
            errorContainer.classList.add("hidden");

            // Aplicar efecto de transición (fade-out rápido)
            weatherContainer.style.opacity = "0";
            weatherContainer.style.transform = "translateY(10px)";
            weatherContainer.style.transition = "opacity 0.2s ease, transform 0.2s ease";

            // Esperar a que termine el fade-out para actualizar datos y hacer fade-in
            setTimeout(() => {
                // Actualizar Textos
                weatherHeading.textContent = `Clima Actual en ${data.name}`;
                conditionText.innerHTML = `<strong>Condición:</strong> ${data.condition}`;
                tempText.innerHTML = `<strong>Temperatura:</strong> ${data.temp}`;
                feelsLikeText.innerHTML = `<strong>Sensación Térmica:</strong> ${data.feelsLike}`;
                humidityText.innerHTML = `<strong>Humedad:</strong> ${data.humidity}`;
                windText.innerHTML = `<strong>Viento:</strong> ${data.wind}`;
                
                // Actualizar Hora de Consulta
                const now = new Date();
                const minutes = String(now.getMinutes()).padStart(2, '0');
                updateTimeText.innerHTML = `<em>Última actualización: Hace unos instantes (${now.getHours()}:${minutes} hrs)</em>`;

                // Actualizar Visuales (Icono y Paisaje)
                iconImg.src = data.icon;
                iconImg.alt = `Icono de clima para ${data.name} representando ${data.condition}`;
                iconCaption.textContent = `Icono ilustrativo de ${data.condition.toLowerCase()}`;
                
                landscapeImg.src = data.landscape;
                landscapeImg.alt = data.caption;
                landscapeCaption.textContent = data.caption;

                // Devolver opacidad con clase fade-in
                weatherContainer.style.opacity = "1";
                weatherContainer.style.transform = "translateY(0)";
                
                // Hacer scroll suave hacia la sección del clima
                document.getElementById("current-weather").scrollIntoView({ behavior: "smooth" });
            }, 200);

        } else {
            // Ciudad no encontrada
            errorContainer.classList.remove("hidden");
            // Scroll suave hacia el error
            errorContainer.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
    });
});
