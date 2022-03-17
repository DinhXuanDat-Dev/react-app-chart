import { FormControl, NativeSelect } from "@material-ui/core";
import React, { forwardRef, useEffect, useState } from "react"
import { fetchCountry } from "../../api/api";
import styles from "./CountrySelect.module.css"


const CountrySelect = forwardRef(( {handleCountryChange}, ref) => {

    const [countryArray , setCountryArray] = useState([])

    useEffect(() => {
        async function fetchAPICountry() {
          const response = await fetchCountry();

          setCountryArray(response)
        }
        fetchAPICountry();
    }, []); 


    return (
       <FormControl sx={{ margin: 5 }} className={styles.container}>
           <NativeSelect 
                onChange ={ (e) => handleCountryChange(e.target.value)}
                >
                    <option value="vietnam">Viet Nam</option>
                        {countryArray.map((country, index) => (
                            <option key ={index} value={country.name}> {country.name}</option>
                        ))}
           </NativeSelect>
       </FormControl>
    )
})

export default CountrySelect