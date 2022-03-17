import React, { useEffect, useState } from "react"
import { Bar, Line } from "react-chartjs-2";
import { fetchDailyData } from "../../api/api";

const Charts = ( {data, countryData} ) => {

    useEffect(() => {
        const getDailyData = async () => {
            setDailyData(await fetchDailyData())
        }

        getDailyData();

    }, []);

    const [dailyData, setDailyData] = useState([])

    if (!dailyData) return 'Fetching API...'

            
    const {confirmed, recovered, deaths} = data
    if(!confirmed) return 'Fetching data faill'

    console.log('dailyData', dailyData);

    const lineChart = (
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


    const barChart = (
        confirmed ? (
            <Bar 
                data = {{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [
                        {
                            label: 'People',
                            backgroundColor: [
                                'blue',
                                'lightgreen',
                                'red'
                            ],
                            data: [confirmed.value, recovered.value, deaths.value]
                        }
                    ]
                }}
                options = {{
                    title: { display: 'true', text: `This is bar chart of ${countryData}`}
                }}
            />
        ): null
    )

    return (
        <>
            <h1>Charts</h1>
            {countryData ? barChart : lineChart}
        </>
        
    )
}

export default Charts