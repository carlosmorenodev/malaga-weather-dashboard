import React, { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function WindIsland() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchWind = async () => {
            try {
                // Añadimos 'wind_speed_10m' a la consulta de Málaga
                const response = await fetch(
                    'https://api.open-meteo.com/v1/forecast?latitude=36.72&longitude=-4.42&hourly=wind_speed_10m&forecast_days=1'
                );
                const json = await response.json();

                const formattedData = json.hourly.time.slice(0, 12).map((time, index) => ({
                    hora: new Date(time).getHours() + ':00',
                    viento: json.hourly.wind_speed_10m[index]
                }));

                setData(formattedData);
                setLoading(false);
            } catch (error) {
                console.error("Error cargando el viento:", error);
            }
        };
        fetchWind();
    }, []);

    if (loading) return <p>Analizando ráfagas...</p>;

    return (
        <div style={{
            background: '#E9F1FD',
            padding: '24px',
            borderRadius: '16px',
            color: 'white',
            display: 'flex',           // Activamos Flexbox
            flexDirection: 'column',    // Elementos uno debajo de otro
            gap: '16px',               // Espacio uniforme entre título y gráfico
            boxSizing: 'border-box',    // El padding no suma tamaño extra
            height: '350px'             // Ocupa el alto de la celda de la rejilla 
        }}>
            <h2 style={{
                color: 'black', marginBottom: '20px'
            }}>Velocidad del Viento en Málaga (km/h)</h2>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart id='wind-chart' data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="hora" stroke="#888" />
                    <YAxis stroke="#888" />
                    <Tooltip contentStyle={{ backgroundColor: '#222', border: 'none' }} />
                    <Area
                        type="monotone"
                        dataKey="viento"
                        stroke="#10b981"
                        fill="#10b981"
                        fillOpacity={0.3}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}