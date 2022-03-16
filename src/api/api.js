import axios from "axios"

const url_api = "https://covid19.mathdro.id/api"

export const fetchData = async () => {
    try {
        const responseData = await axios.get(url_api)

        const { data } = responseData

        const modifiedData = {
            confirmed: data.confirmed,
            recovered: data.recovered,
            deaths: data.deaths,
            lastUpdate: data.lastUpdate
        }

        return modifiedData
    }
    catch(err) {
        console.log(err);
    }
}

export const fetchDailyData = async () => {
    try {
        const dailyData = await axios.get(`${url_api}/daily`)

        const arrayData = [...dailyData.data];

        console.log('arrayData', arrayData);
        
        const modifiedDailyData = arrayData.map((data) => ({
            dailyConfirmed: data.confirmed.total,
            dailyDeath: data.deaths.total,
            dailyRecovered : data.recovered.total,
            reportDate : data.reportDate,
        }))

        return modifiedDailyData
    }
    catch(err) {
        console.log(err);
    }
}