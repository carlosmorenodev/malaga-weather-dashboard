# 🌴 Málaga Weather Dashboard

Un dashboard meteorológico moderno y profesional construido con **Astro** y **React**. Este proyecto utiliza la arquitectura de "Islas" para cargar gráficos interactivos de forma eficiente, obteniendo datos en tiempo real de la API de Open-Meteo para la ciudad de Málaga, España.

![Licencia](https://img.shields.io/badge/license-MIT-blue.svg)
![Astro](https://img.shields.io/badge/Astro-BC52EE?style=flat&logo=astro&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)

## ✨ Características

- **Arquitectura de Islas:** JavaScript de React solo se carga para los componentes interactivos (gráficos).
- **Datos en Tiempo Real:** Conexión directa con la API de [Open-Meteo](https://open-meteo.com/).
- **Gráficos Dinámicos:** Visualización de temperatura y velocidad del viento mediante **Recharts**.
- **Diseño Responsivo:** Interfaz optimizada para móviles, tablets y escritorio con CSS Grid.
- **Modo Oscuro:** Estética moderna y profesional "Dark Mode" por defecto.

## 🚀 Tecnologías utilizadas

* **Framework:** [Astro](https://astro.build/)
* **Biblioteca UI:** [React](https://reactjs.org/)
* **Gráficos:** [Recharts](https://recharts.org/)
* **Estilos:** CSS nativo (Scoped & Global)
* **Gestor de paquetes:** [pnpm](https://pnpm.io/)

## 🛠️ Instalación y Configuración

Sigue estos pasos para ejecutar el proyecto localmente:

1. **Clona el repositorio:**
   ```
   git clone [https://github.com/tu-usuario/nombre-del-repo.git](https://github.com/tu-usuario/nombre-del-repo.git)
   cd nombre-del-repo
2. **Instala las dependencias:**
    ```
    pnpm install
    ```
3. **Inicia el servidor de desarrollo:**

    ```
    pnpm dev
    ```
4. **Abre el navegador:**

    Visita http://localhost:4321 para ver el dashboard en acción.

## 📦 Estructura del Proyecto



```
├── src/
│   ├── components/
│   │   ├── WeatherIsland.jsx   # Gráfico de temperatura (React)
│   │   └── WindIsland.jsx      # Gráfico de viento (React)
│   ├── layouts/
│   │   └── Layout.astro        # Plantilla base HTML/CSS
│   └── pages/
│       └── index.astro         # Página principal (Dashboard)
├── public/                     # Archivos estáticos
└── package.json
```
📈 API Reference

El proyecto consume el siguiente endpoint para obtener el pronóstico de Málaga (Lat: 36.72, Lon: -4.42):
https://api.open-meteo.com/v1/forecast?latitude=36.72&longitude=-4.42&hourly=temperature_2m,wind_speed_10m

📄 Licencia
Este proyecto está bajo la Licencia MIT. Siéntete libre de usarlo y modificarlo.

Creado por Carlos Moreno Martín


## 📬 Contacto
Si tienes alguna pregunta, sugerencia, o estás interesado en mi perfil profesional o colaboraciones, no dudes en contactarme a través de los siguientes canales:

* **Email:** carlosmorenomartindev@gmail.com 
* **Portfolio:** [https://carlosmorenodev.vercel.app/](https://carlosmorenodev.vercel.app/)
* **GitHub:** [https://github.com/carlosmorenodev](https://github.com/carlosmorenodev)
* **LinkedIn:** [https://www.linkedin.com/in/carlosmorenomartindev/](https://www.linkedin.com/in/carlosmorenomartindev/)
