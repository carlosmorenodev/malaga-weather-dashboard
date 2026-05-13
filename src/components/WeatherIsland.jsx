import React, { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function WeatherIsland() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                // Coordenadas Málaga
                const response = await fetch(
                    'https://api.open-meteo.com/v1/forecast?latitude=36.72&longitude=-4.42&hourly=temperature_2m&forecast_days=1'
                );
                const json = await response.json();

                // Formateamos los datos para el gráfico
                const formattedData = json.hourly.time.slice(0, 12).map((time, index) => ({
                    hora: new Date(time).getHours() + ':00',
                    temp: json.hourly.temperature_2m[index]
                }));

                setData(formattedData);
                setLoading(false);
            } catch (error) {
                console.error("Error cargando el clima:", error);
            }
        };

        fetchWeather();
    }, []);

    if (loading) return <p>Cargando pronóstico...</p>;

    return (
        <div style={{
            background: '#0D2740',
            padding: '24px',
            borderRadius: '16px',
            color: 'white',
            display: 'flex',           // Activamos Flexbox
            flexDirection: 'column',    // Elementos uno debajo de otro
            gap: '16px',               // Espacio uniforme entre título y gráfico
            boxSizing: 'border-box',    // El padding no suma tamaño extra
            height: '350px'             // Ocupa el alto de la celda de la rejilla 
        }}>
            < h2 style={{
                color: '#fff', marginBottom: '20px'
            }}> Temperatura Hoy (Málaga)</h2 >
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart id='weather-chart' data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="hora" stroke="#888" />
                    <YAxis stroke="#888" />
                    <Tooltip contentStyle={{ backgroundColor: '#222', border: 'none' }} />
                    <Area
                        type="monotone"
                        dataKey="temp"
                        stroke="#f59e0b" /* Un naranja cálido */
                        fill="#f59e0b"
                        fillOpacity={0.3}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div >
    );
}