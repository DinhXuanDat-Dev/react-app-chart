import { FormControl, NativeSelect } from "@material-ui/core";
import React, { useEffect, useState } from "react"
import { fetchCountry } from "../../api/api";


const CountrySelect = () => {

    const [countryArray , setCountryArray] = useState([])

    useEffect(() => {
        async function fetchAPICountry() {
          const response = await fetchCountry();

          setCountryArray(response)
        }
        fetchAPICountry();
    }, []); 

    console.log(countryArray);

    return (
       <FormControl>
           <NativeSelect>
               <option value="vietnam">Viet Nam</option>
                {countryArray.map((country, index) => (
                    <option key ={index} value={country.name}> {country.name}</option>
                ))}
           </NativeSelect>
       </FormControl>
    )
}

export default CountrySelect