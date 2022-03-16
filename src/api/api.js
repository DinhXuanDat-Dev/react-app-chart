import axios from "axios"

const url_api = "https://covid19.mathdro.id/api"

export const fetchData = async () => {
    try {
        const { data } = await axios.get(url_api)

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

        const modifiedDailyData = arrayData.map((data) => ({
            dailyConfirmed: data.confirmed.total,
            dailyDeath: data.deaths.total,
            dailyRecovered : data.recovered.total,
            reportDate : data.reportDate,
        }))

        console.log('modifiedDailyData', modifiedDailyData);

        return modifiedDailyData
    }
    catch(err) {
        console.log(err);
    }
}

export const fetchCountry = async () => {
    try {
        const { data : {countries} } = await axios.get(`${url_api}/countries`);

        const arrayCountry = [...countries];

        const modifiedDataCountry =  arrayCountry.map((country) => ({
            name : country.name
        }))

        console.log('modifiedDataCountry', modifiedDataCountry);

        return modifiedDataCountry
    }
    catch(err) {
        console.log(err);
    }
}