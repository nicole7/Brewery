import { React, useEffect } from 'react';
import styles from './Brewery.module.scss';
import BreweryCard from './BreweryCard/BreweryCard';
import { getBreweries } from '../BreweryAPI/BreweryAPI';

const Brewery = () => {


    useEffect(() => { 
        const getBrewery = async () => {
            const apiResponse = await getBreweries();
            const aggregatedData = apiResponse.map(response => {
                return response;
            })
        }
        
        getBrewery();
    })
    

    return (
        <div className={styles.breweryContainer}>
            <div className={styles.breweryCardContainer}>
                <BreweryCard />
            </div>
        </div>
    )
    
}

export default Brewery;