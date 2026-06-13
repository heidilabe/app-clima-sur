/**
 * Portal del Clima Sur - Lógica e Interactividad Front-End
 * Permite buscar ciudades del sur de Chile, gestionar favoritos y sugerencias dinámicas
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

// Variable para el control de la ciudad visualizada actualmente
let currentCityKey = "puerto montt";

// Arreglo para almacenar las ciudades favoritas cargadas de LocalStorage (al menos un arreglo)
let favoriteCities = JSON.parse(localStorage.getItem("clima_favoritos")) || [];

// Función auxiliar propia para normalizar cadenas de texto (quitar acentos y espacios adicionales)
function normalizeText(text) {
    return text
        .trim()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

// Función propia para renderizar dinámicamente el pronóstico semanal (Render dinámico en el DOM)
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

// Función propia para actualizar el estado del botón de favoritos
const updateFavoriteButtonState = () => {
    const favoriteBtn = document.getElementById("favorite-btn");
    if (!favoriteBtn) return;

    if (favoriteCities.includes(currentCityKey)) {
        favoriteBtn.classList.add("is-favorite");
        favoriteBtn.innerHTML = "⭐ Guardado";
        favoriteBtn.title = "Quitar de favoritos";
    } else {
        favoriteBtn.classList.remove("is-favorite");
        favoriteBtn.innerHTML = "⭐ Guardar";
        favoriteBtn.title = "Añadir a favoritos";
    }
};

// Función propia para renderizar dinámicamente las ciudades favoritas (Render dinámico en el DOM)
function renderFavorites() {
    const favoritesListContainer = document.getElementById("favorites-list");
    const emptyMsg = document.getElementById("favorites-empty-msg");
    if (!favoritesListContainer) return;

    favoritesListContainer.innerHTML = "";

    if (favoriteCities.length === 0) {
        if (emptyMsg) emptyMsg.classList.remove("hidden");
        return;
    }

    if (emptyMsg) emptyMsg.classList.add("hidden");

    favoriteCities.forEach(cityKey => {
        const data = weatherDatabase[cityKey];
        if (!data) return;

        const favCard = document.createElement("div");
        favCard.className = "favorite-card fade-in";
        favCard.setAttribute("role", "listitem");
        favCard.innerHTML = `
            <div class="fav-info" style="display: flex; flex-direction: column; gap: 0.2rem;">
                <span class="fav-name">${data.name}</span>
                <span class="fav-temp">${data.temp} - ${data.condition}</span>
            </div>
            <button class="fav-remove-btn" aria-label="Eliminar ${data.name} de favoritos" title="Eliminar">&times;</button>
        `;

        // Click en la tarjeta carga su clima
        favCard.addEventListener("click", (e) => {
            // Si hace click en el botón de eliminar, no cargamos el clima
            if (e.target.classList.contains("fav-remove-btn")) {
                e.stopPropagation();
                removeFavorite(cityKey);
                return;
            }
            showWeather(cityKey);
        });

        favoritesListContainer.appendChild(favCard);
    });
}

// Función propia para añadir a favoritos
function addFavorite(cityKey) {
    if (!favoriteCities.includes(cityKey)) {
        favoriteCities.push(cityKey);
        localStorage.setItem("clima_favoritos", JSON.stringify(favoriteCities));
        renderFavorites();
        updateFavoriteButtonState();
    }
}

// Función propia para quitar de favoritos
function removeFavorite(cityKey) {
    favoriteCities = favoriteCities.filter(city => city !== cityKey);
    localStorage.setItem("clima_favoritos", JSON.stringify(favoriteCities));
    renderFavorites();
    updateFavoriteButtonState();
}

// Función propia para actualizar y mostrar la información del clima (Render dinámico en el DOM)
function showWeather(cityKey, isInitial = false) {
    const data = weatherDatabase[cityKey];
    if (!data) return;

    currentCityKey = cityKey;

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
    const errorContainer = document.getElementById("search-error");

    if (errorContainer) {
        errorContainer.classList.add("hidden");
    }

    const updateDOM = () => {
        // Actualizar Textos
        if (weatherHeading) {
            // Preservar el botón de favoritos dentro del h2
            weatherHeading.innerHTML = `
                Clima Actual en ${data.name}
                <button
                    id="favorite-btn"
                    class="favorite-btn"
                    aria-label="Añadir ciudad actual a favoritos"
                    title="Añadir a favoritos"
                >⭐ Guardar</button>
            `;
            // Re-vincular listener del botón favoritos recién creado
            const favoriteBtn = document.getElementById("favorite-btn");
            if (favoriteBtn) {
                favoriteBtn.addEventListener("click", () => {
                    if (favoriteCities.includes(currentCityKey)) {
                        removeFavorite(currentCityKey);
                    } else {
                        addFavorite(currentCityKey);
                    }
                });
            }
            updateFavoriteButtonState();
        }

        if (conditionText) conditionText.innerHTML = `<strong>Condición:</strong> ${data.condition}`;
        if (tempText) tempText.innerHTML = `<strong>Temperatura:</strong> ${data.temp}`;
        if (feelsLikeText) feelsLikeText.innerHTML = `<strong>Sensación Térmica:</strong> ${data.feelsLike}`;
        if (humidityText) humidityText.innerHTML = `<strong>Humedad:</strong> ${data.humidity}`;
        if (windText) windText.innerHTML = `<strong>Viento:</strong> ${data.wind}`;
        
        // Actualizar Hora de Consulta
        if (updateTimeText) {
            const now = new Date();
            const minutes = String(now.getMinutes()).padStart(2, '0');
            updateTimeText.innerHTML = `<em>Última actualización: Hace unos instantes (${now.getHours()}:${minutes} hrs)</em>`;
        }

        // Actualizar Visuales (Icono y Paisaje)
        if (iconImg) {
            iconImg.src = data.icon;
            iconImg.alt = `Icono de clima para ${data.name} representando ${data.condition}`;
        }
        if (iconCaption) iconCaption.textContent = `Icono ilustrativo de ${data.condition.toLowerCase()}`;
        
        if (landscapeImg) {
            landscapeImg.src = data.landscape;
            landscapeImg.alt = data.caption;
        }
        if (landscapeCaption) landscapeCaption.textContent = data.caption;

        // Renderizar pronóstico semanal correspondiente
        renderWeeklyForecast(data.forecast);

        // Devolver opacidad
        if (weatherContainer) {
            weatherContainer.style.opacity = "1";
            weatherContainer.style.transform = "translateY(0)";
        }
        
        // Scroll suave al clima si no es la carga inicial
        if (!isInitial) {
            const currentWeatherSection = document.getElementById("current-weather");
            if (currentWeatherSection) {
                currentWeatherSection.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    if (isInitial || !weatherContainer) {
        updateDOM();
    } else {
        // Efecto de transición
        weatherContainer.style.opacity = "0";
        weatherContainer.style.transform = "translateY(10px)";
        weatherContainer.style.transition = "opacity 0.2s ease, transform 0.2s ease";

        setTimeout(updateDOM, 200);
    }
}

// Escuchar evento DOMContentLoaded para inicializar la lógica
document.addEventListener("DOMContentLoaded", () => {
    // Uso de querySelector para seleccionar elementos (Requisito: querySelector)
    const searchForm = document.querySelector("#weather-search-form");
    const cityInput = document.querySelector("#city-search-input");
    const errorContainer = document.querySelector("#search-error");
    
    // Crear el contenedor de sugerencias dinámicamente y agregarlo al DOM
    const suggestionsContainer = document.createElement("div");
    suggestionsContainer.className = "suggestions-dropdown hidden";
    suggestionsContainer.id = "suggestions-dropdown";
    
    // Insertamos el dropdown justo después del input de búsqueda
    if (cityInput && cityInput.parentNode) {
        // Envolvemos el input y el dropdown en un wrapper para posicionarlo de forma premium
        const wrapper = document.createElement("div");
        wrapper.className = "search-input-wrapper";
        wrapper.style.position = "relative";
        wrapper.style.flex = "1";
        wrapper.style.minWidth = "250px";
        
        cityInput.parentNode.insertBefore(wrapper, cityInput);
        wrapper.appendChild(cityInput);
        wrapper.appendChild(suggestionsContainer);
    }

    // Inicializar la carga por defecto con Puerto Montt
    showWeather("puerto montt", true);
    
    // Renderizar favoritos al cargar la página
    renderFavorites();

    // Búsqueda dinámica en tiempo real (Autocompletado / Sugerencias)
    if (cityInput) {
        cityInput.addEventListener("input", (e) => {
            const query = normalizeText(e.target.value);
            suggestionsContainer.innerHTML = "";

            if (query.length === 0) {
                suggestionsContainer.classList.add("hidden");
                return;
            }

            // Filtrar ciudades que inicien o contengan el texto buscado
            const matches = Object.keys(weatherDatabase).filter(key => key.includes(query));

            if (matches.length > 0) {
                matches.forEach(key => {
                    const item = document.createElement("div");
                    item.className = "suggestion-item";
                    item.textContent = weatherDatabase[key].name;
                    item.addEventListener("click", () => {
                        cityInput.value = weatherDatabase[key].name;
                        suggestionsContainer.classList.add("hidden");
                        showWeather(key);
                    });
                    suggestionsContainer.appendChild(item);
                });
                suggestionsContainer.classList.remove("hidden");
            } else {
                suggestionsContainer.classList.add("hidden");
            }
        });

        // Ocultar sugerencias si se hace clic fuera
        document.addEventListener("click", (e) => {
            if (cityInput && !cityInput.contains(e.target) && !suggestionsContainer.contains(e.target)) {
                suggestionsContainer.classList.add("hidden");
            }
        });
    }

    // Manejar el envío del formulario de búsqueda tradicional
    if (searchForm) {
        searchForm.addEventListener("submit", (event) => {
            event.preventDefault(); // Evitar recargar la página
            
            const searchQuery = cityInput ? cityInput.value : "";
            const normalizedQuery = normalizeText(searchQuery);

            if (weatherDatabase[normalizedQuery]) {
                if (suggestionsContainer) {
                    suggestionsContainer.classList.add("hidden");
                }
                showWeather(normalizedQuery);
            } else {
                // Mostrar contenedor de error si no existe la ciudad
                if (errorContainer) {
                    errorContainer.classList.remove("hidden");
                    errorContainer.scrollIntoView({ behavior: "smooth", block: "nearest" });
                }
            }
        });
    }
});
