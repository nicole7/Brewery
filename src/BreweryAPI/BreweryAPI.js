import Brewery from '../Brewery/Brewery';
import axios from 'axios';

const BreweryAPI = async () => {
    try {
        const apiResponse = await axios.get(`https://api.openbrewerydb.org/breweries?page=2&per_page=3`)
                console.log(apiResponse.data)
        } catch(error) {
                console.log(error)
            }
}

export default BreweryAPI;