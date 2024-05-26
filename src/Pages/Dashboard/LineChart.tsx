import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    ChartOptions,
    ChartData,
    LegendOptions
} from "chart.js";
import axios from "axios";

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
);

interface HumidityData {
    timestamp: string;
    value: number;
}

export const LineChart: React.FC = () => {
    const [chartData, setChartData] = useState<ChartData<"line">>({
        labels: [],
        datasets: [{
            data: [],
            backgroundColor: 'transparent',
            borderColor: '#064e3b',
            pointBorderColor: 'transparent',
            pointBorderWidth: 4,
            tension: 0.4
        }]
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get<HumidityData[]>('http://localhost:3001/humidity');
                const data = result.data;
                setChartData({
                    labels: data.map(d => new Date(d.timestamp).toLocaleTimeString()),
                    datasets: [{
                        data: data.map(d => d.value),
                        backgroundColor: 'transparent',
                        borderColor: '#064e3b',
                        pointBorderColor: 'transparent',
                        pointBorderWidth: 4,
                        tension: 0.4
                    }]
                });
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
        const interval = setInterval(fetchData, 1000);

        return () => clearInterval(interval);
    }, []);

    const options: ChartOptions<"line"> = {
        plugins: {
            legend: {
                display: false
            } as LegendOptions<"line">
        },
        scales: {
            x: {
                grid: {
                    display: true
                }
            },
            y: {
                min: 0,
                max: 100,
                ticks: {
                    stepSize: 10,
                    callback: (value: number | string) => value + '%'
                }
            }
        }
    };

    return (
        <div className="chart-section">
            <Line data={chartData} options={options} />
        </div>
    );
};
