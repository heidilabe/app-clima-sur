/**
 * Portal del Clima Sur - Lógica e Interactividad Front-End
 * Permite buscar ciudades del sur de Chile y actualizar el clima de forma dinámica
 */

// Base de datos de simulación para las ciudades del sur de Chile (incluyendo Pronóstico Semanal)
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
        caption: "Bahía de Puerto Montt en un día típico de lluvia",
        forecast: [
            { day: "Lunes", temp: "8°C / 12°C", state: "Lluvia débil", icon: "🌧️" },
            { day: "Martes", temp: "9°C / 11°C", state: "Lluvia moderada", icon: "🌧️" },
            { day: "Miércoles", temp: "8°C / 11°C", state: "Nublado", icon: "☁️" },
            { day: "Jueves", temp: "7°C / 10°C", state: "Llovizna", icon: "🌦️" },
            { day: "Viernes", temp: "8°C / 12°C", state: "Nublado", icon: "☁️" },
            { day: "Sábado", temp: "9°C / 13°C", state: "Nublado parcial", icon: "⛅" },
            { day: "Domingo", temp: "10°C / 13°C", state: "Lluvia débil", icon: "🌧️" }
        ]
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
        caption: "Lago Llanquihue con vistas místicas bajo la lluvia de la cuenca",
        forecast: [
            { day: "Lunes", temp: "7°C / 11°C", state: "Lluvia débil", icon: "🌧️" },
            { day: "Martes", temp: "8°C / 10°C", state: "Lluvia y neblina", icon: "🌧️" },
            { day: "Miércoles", temp: "7°C / 10°C", state: "Cubierto", icon: "☁️" },
            { day: "Jueves", temp: "6°C / 9°C", state: "Llovizna", icon: "🌦️" },
            { day: "Viernes", temp: "7°C / 11°C", state: "Nublado", icon: "☁️" },
            { day: "Sábado", temp: "8°C / 12°C", state: "Nublado parcial", icon: "⛅" },
            { day: "Domingo", temp: "9°C / 12°C", state: "Lluvia débil", icon: "🌧️" }
        ]
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
        caption: "Palafitos de Castro bajo la lluvia intensa de Chiloé",
        forecast: [
            { day: "Lunes", temp: "6°C / 10°C", state: "Lluvia fuerte", icon: "🌧️" },
            { day: "Martes", temp: "7°C / 9°C", state: "Chubascos", icon: "🌧️" },
            { day: "Miércoles", temp: "6°C / 9°C", state: "Nublado", icon: "☁️" },
            { day: "Jueves", temp: "5°C / 8°C", state: "Chubascos", icon: "🌧️" },
            { day: "Viernes", temp: "6°C / 10°C", state: "Lluvia débil", icon: "🌧️" },
            { day: "Sábado", temp: "7°C / 11°C", state: "Nublado", icon: "☁️" },
            { day: "Domingo", temp: "8°C / 11°C", state: "Lluvia fuerte", icon: "🌧️" }
        ]
    },
    "valdivia": {
        name: "Valdivia",
        condition: "Lluvia Persistente",
        temp: "10°C",
        feelsLike: "7°C",
        humidity: "96%",
        wind: "Oeste a 15 km/h",
        icon: "images/rainy_icon.png",
        landscape: "images/valdivia_weather.png",
        caption: "El río Calle-Calle fluyendo bajo un manto lluvioso sureño",
        forecast: [
            { day: "Lunes", temp: "7°C / 11°C", state: "Lluvia persistente", icon: "🌧️" },
            { day: "Martes", temp: "8°C / 10°C", state: "Lluvia", icon: "🌧️" },
            { day: "Miércoles", temp: "6°C / 11°C", state: "Nublado", icon: "☁️" },
            { day: "Jueves", temp: "5°C / 9°C", state: "Llovizna", icon: "🌦️" },
            { day: "Viernes", temp: "6°C / 11°C", state: "Nublado", icon: "☁️" },
            { day: "Sábado", temp: "7°C / 12°C", state: "Despejado", icon: "☀️" },
            { day: "Domingo", temp: "8°C / 12°C", state: "Lluvia", icon: "🌧️" }
        ]
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
        caption: "Día nublado típico en los verdes campos de la provincia de Osorno",
        forecast: [
            { day: "Lunes", temp: "6°C / 11°C", state: "Llovizna", icon: "🌦️" },
            { day: "Martes", temp: "7°C / 10°C", state: "Nublado", icon: "☁️" },
            { day: "Miércoles", temp: "5°C / 10°C", state: "Cubierto", icon: "☁️" },
            { day: "Jueves", temp: "4°C / 9°C", state: "Neblina", icon: "🌫️" },
            { day: "Viernes", temp: "5°C / 11°C", state: "Nublado", icon: "☁️" },
            { day: "Sábado", temp: "6°C / 12°C", state: "Nublado parcial", icon: "⛅" },
            { day: "Domingo", temp: "7°C / 11°C", state: "Llovizna", icon: "🌦️" }
        ]
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
        caption: "El Estrecho de Magallanes azotado por vientos australes extremos",
        forecast: [
            { day: "Lunes", temp: "0°C / 4°C", state: "Escarcha", icon: "❄️" },
            { day: "Martes", temp: "-1°C / 3°C", state: "Nieve débil", icon: "❄️" },
            { day: "Miércoles", temp: "-2°C / 2°C", state: "Nieve", icon: "❄️" },
            { day: "Jueves", temp: "-1°C / 3°C", state: "Viento fuerte", icon: "💨" },
            { day: "Viernes", temp: "0°C / 4°C", state: "Nublado", icon: "☁️" },
            { day: "Sábado", temp: "1°C / 5°C", state: "Chubascos agua-nieve", icon: "🌨️" },
            { day: "Domingo", temp: "2°C / 5°C", state: "Viento fuerte", icon: "💨" }
        ]
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

// Función para renderizar dinámicamente el pronóstico semanal
function renderWeeklyForecast(forecastList) {
    const forecastContainer = document.getElementById("forecast-container");
    if (!forecastContainer) return;

    forecastContainer.innerHTML = ""; // Limpiar contenido previo

    forecastList.forEach(item => {
        const card = document.createElement("div");
        card.className = "forecast-card fade-in";
        card.innerHTML = `
            <span class="forecast-day">${item.day}</span>
            <span class="forecast-icon" role="img" aria-label="${item.state}">${item.icon}</span>
            <span class="forecast-state">${item.state}</span>
            <span class="forecast-temp">${item.temp}</span>
        `;
        forecastContainer.appendChild(card);
    });
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

    // Inicializar con los datos de Puerto Montt por defecto
    if (weatherDatabase["puerto montt"]) {
        renderWeeklyForecast(weatherDatabase["puerto montt"].forecast);
    }

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
                // Actualizar Textos del clima actual
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

                // Renderizar también su pronóstico semanal correspondiente de forma dinámica
                renderWeeklyForecast(data.forecast);

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
