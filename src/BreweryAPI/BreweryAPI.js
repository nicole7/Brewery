import React from 'react';
import axios from 'axios';

const getBreweries = async (page) => {
    try {
        const apiResponse = await axios.get(`https://api.openbrewerydb.org/breweries?page=${page}&per_page=3`)
            return apiResponse.data;
        } catch(error) {
                console.log(error)
            }
}

export { getBreweries };