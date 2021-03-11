import React from 'react';
import axios from 'axios';

const getBreweries = async () => {
    try {
        const apiResponse = await axios.get(`https://api.openbrewerydb.org/breweries?page=2&per_page=3`)
            console.log(apiResponse.data)
            return apiResponse.data;
        } catch(error) {
                console.log(error)
            }
}

export { getBreweries };