import React, { useEffect, useState } from "react"
import { Line } from "react-chartjs-2";
import { fetchDailyData } from "../../api/api";

const Charts = () => {

    const [dailyData, setDailyData] = useState([])

    useEffect(() => {
        const getDailyData = async () => {
            setDailyData(await fetchDailyData())
        }

        getDailyData();

    }, []);

    console.log(dailyData);

    if (!dailyData) return 'Fetching API...'

    const LineChart = (
        dailyData.length ? (
            <Line
                data={{
                    labels: dailyData.map(({ reportDate }) => reportDate),
                    datasets: [
                        {
                            data: dailyData.map((data) => data.dailyConfirmed),
                            label: 'Infected',
                            borderColor: '#3333ff',
                            fill: true,
                        }, {
                            data: dailyData.map((data) => data.dailyDeath),
                            label: 'Deaths',
                            borderColor: 'red',
                            backgroundColor: 'rgba(255, 0, 0, 0.5)',
                            fill: true,
                        }, {
                            data: dailyData.map((data) => data.dailyRecovered),
                            label: 'Recovered',
                            borderColor: 'green',
                            backgroundColor: 'rgba(0, 255, 0, 0.5)',
                            fill: true,
                        },
                    ],
                }}
            />
        ) : null
    )

    return (
        <>
            <h1>Charts</h1>
            {LineChart}
        </>
        
    )
}

export default Charts