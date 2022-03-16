import axios from "axios"

export const fetchData = async () => {
    try {
        const responseData = await axios.get("https://covid19.mathdro.id/api")

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